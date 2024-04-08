Array.prototype.groupBy = function (fn) {
  const result = {}
  for (const obj of this) {
    const key = fn(obj)
    result[key] = result[key] || []
    result[key].push(obj)
  }
  return result
}
