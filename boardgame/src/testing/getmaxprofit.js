const getMaxProfit = pricesArr => {
  let maxSoFar = 0
  let maxEnding = 0
  let minPrice = pricesArr[0]

  for (let i = 0; i < pricesArr.length; i++) {
    // console.log("loop [" + i + "]")
    maxEnding = Math.max(0, pricesArr[i] - minPrice)
    // console.log(maxEnding)
    minPrice = Math.min(minPrice, pricesArr[i])
    // console.log(minPrice)
    maxSoFar = Math.max(maxEnding, maxSoFar)
    // console.log(maxSoFar)
  }

  if (maxSoFar <= 0) return 0

  return maxSoFar
}

console.log(getMaxProfit([2, 3, 4, 17, 1, 15, 2, 4, 3, 19]))
