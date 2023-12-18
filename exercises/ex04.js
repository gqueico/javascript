const studentName = prompt('Digite o nome do aluno:');
let firstNote = prompt('Informe a primeira nota:');
let secondNote = prompt('Informe a segunda nota:');
let thirdNote = prompt('Informe a terceira nota:');

let average = (Number(firstNote) + Number(secondNote) + Number(thirdNote)) / 3;

if(average > 6) {
  alert('Parabéns você foi aprovado!');
} else {
  alert('Dê o seu melhor na prova de recuperação!');
}

alert(`
  Aluno: ${studentName}
  Média: ${average.toFixed(1)}
`);