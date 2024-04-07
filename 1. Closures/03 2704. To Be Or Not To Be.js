var expect = function (val) {
  return {
    toBe: (anotherValue) => {
      if (val !== anotherValue) {
        throw new Error('Not Equal')
      } else {
        return true
      }
    },
    notToBe: (anotherValue) => {
      if (val === anotherValue) {
        throw new Error('Equal')
      } else {
        return true
      }
    },
  }
}
