//Write a Program to print the Fibonacci series e.g 0 1 1 2 3 5 8 13 21....

function fibonacci(num) {
  let def1 = 0;
  let def2 = 1;
  let next;
  console.log(def1);
  console.log(def2);
  for (let i = 1; i <= 10; i++) {
    next = def1 + def2;
    console.log(next);
    def1 = def2;
    def2 = next;
  }
}

fibonacci(10);
