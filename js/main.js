function isPar(number) {
  return number % 2 === 0;
}
function factorial(number) {
  if (number < 0) {
    return undefined;
  } else if (number === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}

let number = 0;
