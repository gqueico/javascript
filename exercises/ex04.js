const studentName = prompt('Digite o nome do(a) aluno(a):');
let firstNote = prompt('Informe a primeira nota:');
let secondNote = prompt('Informe a segunda nota:');
let thirdNote = prompt('Informe a terceira nota:');

let average = (Number(firstNote) + Number(secondNote) + Number(thirdNote)) / 3;

if(average > 6 && average >= 10) {
  alert('Parabéns você foi aprovado!');
  average = average.toFixed(0)
}else if(average > 6 ){
  alert('Parabéns você foi aprovado!');
  average = average.toFixed(1)
}else {
  alert('Dê o seu melhor na prova de recuperação!');
  average = average.toFixed(1)
}

alert(`
  Aluno: ${studentName}
  Média: ${average}
`);