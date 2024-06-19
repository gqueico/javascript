// const idadeGuilherme = 30;
// const idadeMichele = 27;

// function sum(number1, number2) {
//   const result = number1 + number2;

//   return result;
// }

// const sumGuilhermeMichele = sum(idadeGuilherme, idadeMichele);
// console.log(`Guilherme e Michele: ${sumGuilhermeMichele}`);

// let subject = 'create video';

// function createThink() {
//   subject = 'study'
//   return subject
// }

// console.log(createThink(subject));
// console.log(subject);

// sayMyName();

// function sayMyName() {
//   console.log('Guilherme');
// }

// const sayMyName = () => {
//   console.log('Guilherme')
// }

// sayMyName();

// let fruit = 'banana';

// function getFruit(fruit) {
//   fruit = 'orange';
//   return fruit;
// };

// console.log(fruit);
// console.log(getFruit(fruit));

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const user1 = new Person('Guilherme', 30, 'Masculino');
const user2 = new Person('Michele', 27, 'Feminino');
const user3 = new Person('Samuel', 1, 'Masculino');

console.log(user1);
console.log(user2);
console.log(user3);

function sayMyName(name = '') {
  if(name === '') {
    throw new Error('')
  }

  console.log(name)
}

try {
  sayMyName('')
} catch(e) {
  console.log(e)
}

console.log('após ao try/catch');