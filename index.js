const colors = require("colors");
const arg1 = process.argv[2];
const arg2 = process.argv[3];
const array = [];
console.log(arg1);
console.log(arg2);

if (isNaN(arg1) || isNaN(arg2)) {
    console.log("Введены некорректные данные".red);
    return;
  } else {
    for (let i = arg1; i <= arg2; i++) {
      if (isPrime(i)) {
        array.push(i);
      }
    }
  }
  
  if (array.length === 0) {
    console.log(`Интервал [${arg1},${arg2}] не содержит простые числа`.red);
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i % 3 === 0) {
        console.log(colors.green(array[i]));
      } else if (i % 3 === 1) {
        console.log(colors.yellow(array[i]));
      } else {
        console.log(colors.red(array[i]));
      }
    }
    //   console.log(array);
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }