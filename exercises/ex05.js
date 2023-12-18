let listItems = [];

for(let item = 0; item < 10; item++) {
  let items= prompt(`Digite o ${item + 1}ª item da lista:`);
  listItems[item] = items; 
}

alert(listItems);