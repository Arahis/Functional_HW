// 0 1 1 2 3 5 8 13 21 34 55 ...

let fibonacci = (n) => {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(16));
