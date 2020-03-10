// function foo(x: number) {
//   y++
//   z = x * y
// }

// var y = 5
// let z

// foo(20)
// z
// console.log(z)
// foo(25)
// console.log(z)

function foo(x, y, z) {
  bar(x)
  return [y, z]
  function bar(x) {
    y = x * z
    z = x * y
  }
}

console.log(foo(1, 2, 3))
console.log(foo(1, 2, 3))
console.log(foo(3, 9, 5))
console.log(foo(3, 9, 5))
