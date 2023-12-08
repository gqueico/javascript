// function expression or function anonymous

// parameters - parâmetros
const sum = function(number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 2
let number2 = 3
// sum(number1, number2) // arguments - argumentos

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)

// arrow function
const sayMyName = () => {
  console.log('Guilheme');
}

sayMyName();