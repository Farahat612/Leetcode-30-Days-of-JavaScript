var cancellable = function (fn, args, t) {
  let timerId = null
  let currentTime = 0
  const results = []

  // Function to execute fn with args and record the result
  const executeFn = () => {
    const result = fn(...args)
    results.push({ time: currentTime, returned: result })
    currentTime += t
  }

  // Execute fn immediately
  executeFn()

  // Schedule repeated execution of fn every t milliseconds
  timerId = setInterval(executeFn, t)

  // Function to cancel the scheduled execution
  const cancelFn = () => {
    if (timerId !== null) {
      clearInterval(timerId)
      timerId = null
      console.log(`Cancelled at ${currentTime}`)
    }
    return results
  }

  return cancelFn
}
