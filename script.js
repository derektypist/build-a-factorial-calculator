let num = 5;

// Function to Return the factorial of a number
function factorialCalculator(num) {
  let result = 1;
  for (let i=1; i<= num; i++) {
    result *= i;
  }
  return result;
}

// Declare Variables
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;

// Log the Result Message to the Console
console.log(resultMsg);
