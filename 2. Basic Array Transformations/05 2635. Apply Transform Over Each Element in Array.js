var map = function (arr, fn) {
  const result = []
  for (const i in arr) {
    result.push(fn(arr[i], Number(i)))
  }
  return result
}
