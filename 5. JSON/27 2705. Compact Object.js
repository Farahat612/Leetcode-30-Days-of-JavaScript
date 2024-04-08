var compactObject = function (obj) {
  // Helper function to compact a given value (object, array, or primitive)
  const compactValue = (value) => {
    if (Array.isArray(value)) {
      // Compact the array
      return value.filter((element) => Boolean(element)).map(compactValue)
    } else if (typeof value === 'object' && value !== null) {
      // Compact the object (including nested objects)
      const compactedObj = {}
      for (const key in value) {
        if (value.hasOwnProperty(key) && Boolean(value[key])) {
          compactedObj[key] = compactValue(value[key])
        }
      }
      return compactedObj
    } else {
      // For primitive values, return as-is if truthy
      return value
    }
  }

  // Use the helper function to compact the entire object
  return compactValue(obj)
}
