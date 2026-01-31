function fibonacci(n) {
  let def1 = 0;
  let def2 = 1;
  let next;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  for (let i = 1; i < n; i++) {
    next = def1 + def2;
    def1 = def2;
    def2 = next;
  }
  return next;
}

console.log(fibonacci(10));
