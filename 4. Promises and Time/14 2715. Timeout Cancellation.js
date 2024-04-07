var cancellable = function (fn, args, t) {
  let timerId = null
  let executed = false

  // Function to execute fn with args after delay
  const executeFn = () => {
    if (!executed) {
      executed = true
      return fn(...args)
    }
  }

  // Schedule execution of fn after delay
  timerId = setTimeout(executeFn, t)

  // Function to cancel the scheduled execution
  const cancelFn = () => {
    if (timerId !== null) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  return cancelFn
}
