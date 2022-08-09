const minmax2 = numbers => {
  numbers.sort((a, b) => b - a)
  let resArr = []

  resArr.push(numbers[1])
  resArr.push(numbers[numbers.length - 2])

  return resArr
}

console.log(minmax2([25, 20, 1, 2, 15, 16, 17, 4]))
