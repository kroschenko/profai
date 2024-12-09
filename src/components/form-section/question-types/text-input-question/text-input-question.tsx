import { Input, Typography } from "antd";
import { useEffect, useState } from "react";
import styles from "./text-input-question.module.css";

const { TextArea } = Input;

interface TextInputQuestionProps {
  text: string;
  setValue: (n: string[]) => void;
  saveValue: (n: string[]) => void;
  value: string[];
}

export const TextInputQuestion = ({
  text,
  setValue,
  saveValue,
  value,
}: TextInputQuestionProps) => {
  const [answer, setAnswer] = useState(value[0]);

  useEffect(() => {
    setAnswer(value[0]);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Typography.Title
          style={{ marginLeft: 32, fontSize: "24px", color: "#fff" }}
          level={1}
        >
          {text}
        </Typography.Title>
        <div className={styles.optionsContainer}>
          <TextArea
            style={{ fontSize: 20, color: "black" }}
            onBlur={() => {
              console.log(answer);
              setValue([answer]);
              saveValue([answer]);
            }}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Введите ответ"
            autoSize={{ minRows: 1, maxRows: 5 }}
            maxLength={400}
            variant="borderless"
          />
        </div>
      </div>
    </div>
  );
};
