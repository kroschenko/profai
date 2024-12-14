export enum QuestionType {
  MultiSelect = "MultiSelect",
  Select = "Select",
  TextInput = "TextInput",
}

export type Question = {
  type: QuestionType
  text: string
  options: string[] | []
}

export type Quality = {
  name: string
  shortName: string
  description: string
}