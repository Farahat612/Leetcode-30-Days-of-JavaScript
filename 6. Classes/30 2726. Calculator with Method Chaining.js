class Calculator {
  /**
   * @param {number} value - Initial value of the calculator
   */
  constructor(value) {
    this.result = value
  }

  /**
   * @param {number} value - Number to add to the result
   * @return {Calculator} - Returns the updated Calculator instance
   */
  add(value) {
    this.result += value
    return this
  }

  /**
   * @param {number} value - Number to subtract from the result
   * @return {Calculator} - Returns the updated Calculator instance
   */
  subtract(value) {
    this.result -= value
    return this
  }

  /**
   * @param {number} value - Number to multiply with the result
   * @return {Calculator} - Returns the updated Calculator instance
   */
  multiply(value) {
    this.result *= value
    return this
  }

  /**
   * @param {number} value - Number to divide the result by
   * @return {Calculator} - Returns the updated Calculator instance
   * @throws Error if dividing by zero
   */
  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed')
    }
    this.result /= value
    return this
  }

  /**
   * @param {number} value - Exponent value to raise the result to
   * @return {Calculator} - Returns the updated Calculator instance
   */
  power(value) {
    this.result **= value
    return this
  }

  /**
   * @return {number} - Returns the current result
   */
  getResult() {
    return this.result
  }
}
