import { personalityQuestions } from "@/core/personality"
import { proforientationQuestions } from "@/core/proforientation"

export const getAnswers = (answers: string[][]) => {
  const description = [
    answers[0][0],
    "Мои сильные стороны - это",
    answers[1][0],
    "Мои слабые стороны - это",
    answers[2][0]
  ].join(" ")

  const vectorSlice = answers.slice(3, 3 + personalityQuestions.length)
    .map(a => (Number.parseInt(a[0]) * 0.25))
  const vector = []
  for (let i = 0; i < personalityQuestions.length; i += 3) {
    vector.push((vectorSlice[i] + vectorSlice[i + 1] + vectorSlice[i + 2]) / 3)
  }

  const facultiesSlice = answers.slice(3 + personalityQuestions.length)
    .map(a => (Number.parseInt(a[0]) * 0.25))
  const facultiesScores = []
  for (let i = 0; i < proforientationQuestions.length; i += 5) {
    let score = 0
    for (let j = 0; j < 5; j++) {
      score += facultiesSlice[i + j]
    }
    facultiesScores.push(score / 5)
  }

  return { description, vector, facultiesScores }
}
