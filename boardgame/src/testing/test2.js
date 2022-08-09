let letterCombinations = digits => {
  const letterList = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  }

  if (!digits) {
    return []
  }

  const checkArr = digits.toString().split("")
  const resArr = []

  if (checkArr.length < 2) {
    return letterList[digits]
  }

  for (let i = 0; i < checkArr.length - 1; i++) {}

  return ["testing"]
}

console.log(letterCombinations(23))
