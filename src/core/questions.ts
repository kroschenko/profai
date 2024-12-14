import { personalityQuestions } from "./personality"
import { proforientationQuestions } from "./proforientation"
import { Quality, Question, QuestionType } from "./types";

export const qualities: Quality[] = [
  { name: "Анализ", shortName: "Анализ", description: "Склонность к анализу информации и поиску закономерностей" },
  { name: "Адаптивность", shortName: "Адаптивность", description: "Способность быстро адаптироваться к изменениям и новым условиям" },
  { name: "Внимательность", shortName: "Внимательность", description: "Умение замечать мелочи и фокусироваться на деталях" },
  { name: "Коммуникация", shortName: "Коммуникация", description: "Способность эффективно взаимодействовать с другими" },
  { name: "Наука и исследования", shortName: "Наука и исследования", description: "Интерес к изучению нового и проведению исследований" },
  { name: "Социальная активность", shortName: "Социальная активность", description: "Интерес к участию в мероприятиях и социальных инициативах" },
  { name: "Организованность", shortName: "Организованность", description: "Умение структурировать задачи и планировать время" },
  { name: "Независимость", shortName: "Независимость", description: "Стремление принимать решения и действовать самостоятельно" },
  { name: "Креатив", shortName: "Креатив", description: "Способность придумывать оригинальные идеи и проекты" },
  { name: "Лидерство", shortName: "Лидерство", description: "Желание вдохновлять других и организовывать проекты" },
  { name: "Работа в команде", shortName: "Работа в команде", description: "Умение эффективно работать в группе" },
  { name: "Стрессоустойчивость", shortName: "Стрессоустойчивость", description: "Способность сохранять спокойствие в сложных ситуациях" },
  { name: "Выносливость", shortName: "Выносливость", description: "Стремление завершать задачи, даже если они требуют больших усилий" },
  { name: "Рутина", shortName: "Рутина", description: "Способность выполнять однообразные задачи без потери мотивации" },
  { name: "Разрешение конфликтов", shortName: "Разрешение конфликтов", description: "Способность эффективно справляться с конфликтными ситуациями и находить компромиссы" }
];

export const questions: Question[] = [
  {
    type: QuestionType.TextInput,
    text: "Расскажите о себе, какие у вас есть увлечения, хобби, что вам нравится?",
    options: []
  },
  {
    type: QuestionType.TextInput,
    text: "Какие у вас сильные стороны?",
    options: []
  },
  {
    type: QuestionType.TextInput,
    text: "Что вам не нравится или вызывает трудности?",
    options: []
  },
  ...personalityQuestions,
  ...proforientationQuestions,
]
