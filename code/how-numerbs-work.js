function deconstruct(number) {
  let sign = 1
  let coefficient = number
  let exponent = 0
  if (coefficient < 0) {
    coefficient = -coefficient
    sign = -1
  }
  if (Number.isFinite(number) && number !== 0) {
    exponent = -1129
    let reduction = coefficient
    while (reduction !== 0) {
      exponent += 1
      reduction /= 2
    }
    reduction = exponent
    while (reduction > 0) {
      coefficient /= 2
      reduction -= 1
    }
    while (reduction < 0) {
      coefficient *= 2
      reduction += 1
    }
    return {
      sign,
      coefficient,
      exponent,
      number
    }
  }
}
console.log(deconstruct(Number.MAX_SAFE_INTEGER))
