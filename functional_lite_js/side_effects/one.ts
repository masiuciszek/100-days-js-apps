const sum = (arr: number[]): number => {
  return arr.reduce((a, b) => a + b, 0)
}

// NO SIDE EFFECTS!!
const add = (a: number, b: number): number => {
  return a + b
}

// PURE WAY
// console.log(sum([1, 2, 3, 4, 5]))

// console.log(add(5, 5))
// console.log(add(5, 5))
// console.log(add(5, 5))
// console.log(add(5, 5))

// HOW TO MAKE A unpure function into a pure one

const foo = (x, y, z) => {
  mult(x)
  return [y, z]
  function mult(x) {
    y = z * x
    z = y * x
  }
}

console.log(foo(4, 3, 2))
console.log(foo(4, 2, 1))
console.log(foo(4, 2, 1))
