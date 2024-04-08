var join = function (arr1, arr2) {
  // Map to store merged objects based on id
  const idMap = new Map()

  // Helper function to merge objects
  const mergeObjects = (target, source) => {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key]
      }
    }
  }

  // Process arr1
  for (const obj of arr1) {
    idMap.set(obj.id, { ...obj }) // Use spread operator to copy the object
  }

  // Process arr2 and merge with existing objects
  for (const obj of arr2) {
    const id = obj.id
    if (idMap.has(id)) {
      // Merge with existing object
      const existingObj = idMap.get(id)
      mergeObjects(existingObj, obj)
    } else {
      // Add as new object
      idMap.set(id, { ...obj })
    }
  }

  // Sort merged objects by id in ascending order
  const sortedArray = Array.from(idMap.values()).sort((a, b) => a.id - b.id)

  return sortedArray
}
