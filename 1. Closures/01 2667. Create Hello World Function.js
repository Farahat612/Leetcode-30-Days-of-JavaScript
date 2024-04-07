var createHelloWorld = function () {
  return () => 'Hello World'
}

// Other ways to do it:
// 1. Using a function expression
var createHelloWorld = function () {
  return function helloWorld() {
    return 'Hello World'
  }
}

// 2. Using Arrow Syntax + Rest Arguments
var createHelloWorld = function () {
  return (...args) => 'Hello World'
}
