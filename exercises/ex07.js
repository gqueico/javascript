let option;
let items = [];
let userName = prompt('Insira o nome do usuário:')

while(option != 3) {
  option = Number(prompt(`Olá ${userName}! Digite o número da opção desejada
  
    [1] Cadastrar um item na lista
    [2] Mostrar itens cadastrados
    [3] Sair do programa
  `));

  switch(option) {
    case 1:
      let item = prompt(`Digite o nome do item`);
      items.push(item);
      break;
    case 2:
      if(items.length == 0) {
        alert(`Não existem itens cadastrados`);
      } 
      else {
        alert(items);
      };
      break;
    case 3:
      alert(`Saindo...`);
      break;
    default:
      alert(`Opção inválida! Tente novamente.`);
  };
};