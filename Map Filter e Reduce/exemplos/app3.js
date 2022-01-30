const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// saída experada: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// saída experada: 15
