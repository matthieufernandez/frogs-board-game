let testArr = [1, 2, 3]

let isPalindrome = inputNum => {
  if (inputNum < 0) {
    return false
  }

  const intArr = inputNum.toString().split("").reverse().join("")

  console.log(intArr, inputNum)

  if (inputNum.toString() === intArr) return true

  return false
}

console.log(isPalindrome(121))
