var reduce = function (nums, fn, init) {
  if (nums.length == 0) {
    return init
  }
  let value = init
  for (let i = 0; i < nums.length; i++) {
    value = fn(value, nums[i])
  }
  return value
}
