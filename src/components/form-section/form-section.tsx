"use client";

import styles from "./form-section.module.css";
import { Form, notification } from "antd";
import { questions } from "@/core/questions";
import { useEffect, useState } from "react";
import { SelectQuestion } from "./question-types/select-question/select-question";
import { MultiSelectQuestion } from "./question-types/multi-select-quection/multi-select-question";
import { TextInputQuestion } from "./question-types/text-input-question/text-input-question";
import { getAnswers } from "./helpers/get-answers";
import { setTest } from "@/store/reducers/test";
import { useAppDispatch } from "@/store";
import { validateTest } from "./helpers/validate-test";
import {
  setChart,
  setDescription,
  setFaculties,
} from "@/store/reducers/result";
import { faculties } from "@/core/students";
import { Question, QuestionType } from "@/core/types";

interface GetQuestionItemProps {
  question: Question;
  key: string;
  value: string[];
  setValue: (v: string[]) => void;
  saveValue: (v: string[]) => void;
}

const getQuestionItem = ({
  question,
  key,
  value,
  setValue,
  saveValue,
}: GetQuestionItemProps) => {
  switch (question.type) {
    case QuestionType.Select:
      return (
        <SelectQuestion
          key={key}
          text={question.text}
          options={question.options}
          setValue={setValue}
          saveValue={saveValue}
          value={value}
        />
      );
    case QuestionType.MultiSelect:
      return (
        <MultiSelectQuestion
          key={key}
          text={question.text}
          options={question.options}
          setValue={setValue}
          value={value}
        />
      );
    case QuestionType.TextInput:
      return (
        <TextInputQuestion
          key={key}
          text={question.text}
          setValue={setValue}
          saveValue={saveValue}
          value={value}
        />
      );
    default:
      return null;
  }
};

interface FormSectionProps {} // eslint-disable-line

export const FormSection = ({}: FormSectionProps) => {
  const [api, contextHolder] = notification.useNotification();
  const [isDisabled, setIsDisabled] = useState(false);
  const [answers, setAnswers] = useState<string[][]>(
    Array.from({ length: questions.length }, () => [])
  );
  const [shuffle, setShuffle] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const formStateJson = localStorage.getItem("formState");
    if (formStateJson) {
      setAnswers(JSON.parse(formStateJson));
    }
    const shuffleJson = localStorage.getItem("shuffle");
    console.log(shuffleJson);
    if (shuffleJson) {
      setShuffle(JSON.parse(shuffleJson));
    } else {
      const newShuffle = Array.from(
        { length: questions.length },
        (_, i) => i
      ).sort(() => Math.random() - 0.5);
      localStorage.setItem("shuffle", JSON.stringify(newShuffle));
      setShuffle(newShuffle);
    }
  }, []);

  const setValueWithIndex = (v: string[], i: number) => {
    const newAnswers = [...answers];
    newAnswers[i] = v;
    setAnswers(newAnswers);
  };

  const saveValueWithIndex = (v: string[], i: number) => {
    const newAnswers = [...answers];
    newAnswers[i] = v;
    localStorage.setItem("formState", JSON.stringify(newAnswers));
  };

  const onSubmit = async () => {
    const { isValid, } = validateTest(answers);
    if (!isValid) {
      api.error({
        message: "Ответьте на все вопросы!",
        duration: 5,
      });
      console.log("Ответьте на все вопросы!");
      return;
    }
    setIsDisabled(true);
    api.info({
      message: "Подождите, подготовка результатов.",
      duration: 5,
    });
    console.log("Подождите, подготовка результатов.");
    const test = getAnswers(answers);
    console.log(answers);
    console.log(test);
    console.log("test", test.description, test.vector);
    dispatch(setTest(test));
    const resText2vec = await fetch(
      `/api/llm/text2vec?text=${encodeURIComponent(test.description)}`
    );
    const ai = (await resText2vec.json()).response;
    console.log("ai", ai);
    const final = [];
    for (let i = 0; i < test.vector.length; i++) {
      const d = (test.vector[i] - ai[i]) / 3.33;
      const t = test.vector[i] - d;
      final.push(Math.max(0, Math.min(1, t)));
    }
    console.log("final", final);
    dispatch(setChart({ test: test.vector, ai, final }));
    api.info({ message: "Хмм, интересно. Взгляните на график.", duration: 5 });
    const scores = Array.from({ length: faculties.length }, (_, i) => ({
      name: faculties[i],
      score: test.facultiesScores[i],
    })).sort((a, b) => b.score - a.score);
    console.log("faculties", scores);
    dispatch(setFaculties(scores));
    const top = scores[0].name;
    console.log("top", top);
    const url = new URL("/api/llm/describe", window.location.origin);
    url.searchParams.append("top", top);
    url.searchParams.append("text", test.description);
    const resDescribe = await fetch(url.toString());
    const description = (await resDescribe.json()).response;
    console.log("description", description);
    dispatch(setDescription(description));
    api.success({
      message: "Тестирование завершено. Взгляните на результаты.",
      duration: 5,
    });
  };

  const shuffledQuestions = shuffle.map((i) => {
    const q = questions[i];
    return getQuestionItem({
      question: q,
      key: i + "",
      value: answers[i],
      setValue: (v) => setValueWithIndex(v, i),
      saveValue: (v) => saveValueWithIndex(v, i),
    });
  });

  return (
    <section className={styles.container}>
      {contextHolder}
      <Form className={styles.wrapper} onFinish={onSubmit}>
        {shuffledQuestions}
        <button
          style={isDisabled ? { display: "none" } : {}}
          className={styles.submit}
          type="submit"
        >
          Отправить
        </button>
	<h1><a href="https://docs.google.com/forms/d/e/1FAIpQLSe66ZRi_Sg-bX6zPM-uB0xDG0hBAYuFIhXc2PwvjaEyxIoL0Q/viewform">Ссылка</a> на google-форму для отправки результатов</h1>
      </Form>
    </section>
  );
};
