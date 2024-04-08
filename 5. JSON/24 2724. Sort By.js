var sortBy = function (arr, fn) {
  // Use Array.prototype.sort() with a custom comparator function
  arr.sort((a, b) => {
    const valueA = fn(a) // Calculate value of a using fn
    const valueB = fn(b) // Calculate value of b using fn

    // Compare values to determine sort order
    if (valueA < valueB) {
      return -1 // valueA should come before valueB
    } else if (valueA > valueB) {
      return 1 // valueA should come after valueB
    } else {
      return 0 // values are equal (shouldn't happen if fn never duplicates)
    }
  })

  return arr // Return the sorted array
}
