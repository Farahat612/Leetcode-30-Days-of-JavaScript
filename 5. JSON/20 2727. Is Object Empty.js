var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    // Check if the array has zero elements
    return obj.length === 0
  } else if (typeof obj === 'object' && obj !== null) {
    // Check if the object has zero key-value pairs
    return Object.keys(obj).length === 0
  } else {
    // If obj is neither an array nor an object, it's considered empty
    return true
  }
}
