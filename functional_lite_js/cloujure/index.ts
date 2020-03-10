const counter = (n: number) => {
  return (x: number) => {
    n += 1
    return x * n
  }
}

console.log(counter(5)(5))
counter(5)(5)
counter(5)(5)
counter(5)(5)
counter(5)(5)
counter(5)(5)
console.log(counter(5)(5))
console.log(counter(5)(5))
console.log(counter(5)(5))
console.log(counter(5)(5))
console.log(counter(5)(5))
