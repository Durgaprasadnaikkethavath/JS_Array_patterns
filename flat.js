// Flatting Nested Arrays

const arr = [1, 2, [3, 4, [5], [56, [122]]]];

const flatArray = arr.flat(3);
console.log(flatArray);
