var filter = function (arr, fn) {
  const result = []
  for (const i in arr) {
    if (fn(arr[i], Number(i))) {
      result.push(arr[i])
    }
  }
  return result
}
