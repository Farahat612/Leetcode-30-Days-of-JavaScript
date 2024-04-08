var flat = function (arr, n) {
  let result = []
  const flattening = (nums, l) => {
    for (const num of nums) {
      if (Array.isArray(num) && l > 0 && l <= n) {
        flattening(num, l - 1)
      } else {
        result.push(num)
      }
    }
  }

  flattening(arr, n)
  return result
}
