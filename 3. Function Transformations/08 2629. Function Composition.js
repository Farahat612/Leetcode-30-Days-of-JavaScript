var compose = function (functions) {
  return function (x) {
    for (const funcion of functions.reverse()) {
      x = funcion(x)
    }
    return x
  }
}
