let myName = 'Guilherme'
console.log(myName.length);

let number = 123
console.log(String(number).length);

// Definindo o número de casas decimais
let numberFloat = 345.3333
console.log(numberFloat.toFixed(2));

// Realizando a troca do ponto para vircula
console.log(numberFloat.toFixed(2).replace(".", ","));

// Troca de maiúscula e minúsculas
let word = "Programar é muito bacana!"
console.log(word.toLowerCase()); // minúscula
console.log(word.toUpperCase()); // maiúscula

// Separa um texto que contem espaços em um array.
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ");
console.log(myArray);
// Transforme o array em um texto e onde era espaços, coloque _
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore);

// Verificar se o texto contém a palavra Amor
let newPhrase = "Eu quero viver o Amor!"
console.log(newPhrase.includes('Amor')); // true
console.log(newPhrase.includes('amor')); // false

// Criando Array com construtor
let array = new Array(10); // Cria array com 10 posições
console.log(array);

// Transformar uma cadeia de caracteres em elementos de um array
let newWord = 'manipulação'
console.log(Array.from(newWord));

// Manipulando Arrays

let techs = ['html', 'css', 'js']
console.log(techs);

// Adicionando um item no fim do array
techs.push('nodejs');
console.log(techs);

// Adicionando um item no inicio do array
techs.unshift('sql');
console.log(techs);

// Removendo o último item do array
techs.pop();
console.log(techs);

// Removendo o primeiro item do array
techs.shift();
console.log(techs);

// Pegando somente alguns items do array
console.log(techs.slice(0, 2));

// Removendo 1 ou mais items em qualquer posição do array
let moreTechs = ['html', 'css', 'js', 'node.js', 'react']
console.log(moreTechs);
// Primeiro aguarmento é o indice e o segundo a quantidade
moreTechs.splice(1, 3);
console.log(moreTechs);

// Encontrar a posição de um item no array
let index = moreTechs.indexOf('react')
console.log(index);