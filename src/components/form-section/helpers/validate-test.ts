export const validateTest = (answers: string[][]) => {
  for (let i = 0; i < 3; i++) {
    if (answers[i][0].length === 0) {
      return { isValid: false, wrong: [i] }
    }
  }
  for (let i = 3; i < answers.length; i++) {
    if (answers[i].length === 0) {
      return { isValid: false, wrong: [i] }
    }
  }
  return { isValid: true, wrong: [] }
}