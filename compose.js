const compose = (...fns) => {
  return fns.reduce((prevFn, fn) => (...args) => {
    return prevFn(fn(...args));
  });
};

let minus8 = (num) => num - 8;
let add10 = (num) => num + 10;
let multiply10 = (num) => num * 10;

console.log(compose(minus8, add10, multiply10)(4));
