function promiseAll(functions) {
  // Keep track of resolved values, rejections, and the number of pending promises
  const resolvedValues = []
  let rejections = null
  let pending = functions.length

  return new Promise((resolve, reject) => {
    functions.forEach((func, index) => {
      func()
        .then((value) => {
          resolvedValues[index] = value
          pending--
          if (pending === 0 && !rejections) {
            resolve(resolvedValues) // All promises resolved
          }
        })
        .catch((error) => {
          if (!rejections) {
            rejections = error // Store the first rejection
            reject(error) // Reject the main promise
          }
        })
    })
  })
}
