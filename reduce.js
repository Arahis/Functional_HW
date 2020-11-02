// methods to implement .. filter, find, map, some, every

// Filter

const filter = (arr, func) => {
  return arr.reduce((prevItem, curItem) => {
    return func(curItem) ? [...prevItem, curItem] : prevItem;
  }, []);
};

let filterArr = ["milk", "coffee", "tea", "juice", "tacos"];
let filterReducer = (word) => {
  return word[0] === "t";
};

console.log("filter:", filter(filterArr, filterReducer));

// Find

const find = (arr, func) => {
  return arr.reduce((prevItem, curItem) => {
    return prevItem ? prevItem : func(curItem) ? curItem : prevItem;
  }, undefined);
};

let findArr = ["milk", "coffee", "tea", "juice", "tacos"];
let findReducer = (word) => {
  return word[0] === "t";
};

console.log("find:", find(findArr, findReducer));

// Map

const map = (arr, func) => {
  return arr.reduce((prevItem, curItem) => {
    return [...prevItem, func(curItem)];
  }, []);
};

let mapArr = ["milk", "coffee", "tea", "juice"];
let mapReducer = (word) => {
  return `Today we drink ${word}`;
};

console.log("map:", map(mapArr, mapReducer));

// Some

const some = (arr, func) => {
  return arr.reduce((prevItem, curItem) => {
    return func(curItem) ? true : prevItem;
  }, false);
};

let someArr = ["milk", "coffee", "tea", "juice"];
let someReducer = (word) => {
  return word.length > 4;
};

console.log("some:", some(someArr, someReducer));

//Every

const every = (arr, func) => {
  return arr.reduce((prevItem, curItem) => {
    return func(curItem) ? prevItem : false;
  }, true);
};

let everyArr = ["milk", "coffee", "tea", "juice"];
let everyReducer = (word) => {
  return word.length > 4;
};

console.log("every:", every(everyArr, everyReducer));
