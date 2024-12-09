
export const getAnswers = (answers: string[][]) => {
  const description = [
    answers[0][0],
    "Мои сильные стороны - это",
    answers[1][0],
    "Мои слабые стороны - это",
    answers[2][0]
  ].join(" ")

  const vector = answers.slice(3).map(a => (Number.parseInt(a[0]) * 0.25))
  return { description, vector }
}
