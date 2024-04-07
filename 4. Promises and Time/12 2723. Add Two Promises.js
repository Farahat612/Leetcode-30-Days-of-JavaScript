var addTwoPromises = async function (promise1, promise2) {
  try {
    // Wait for both promises to resolve using await
    const value1 = await promise1
    const value2 = await promise2

    // Calculate the sum of the resolved values
    const sum = value1 + value2

    // Return the sum
    return sum
  } catch (error) {
    // If either promise rejects, handle the error
    throw new Error('Failed to get values from promises')
  }
}
