let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa ao final do array.
console.log(tasksList);

tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa ao começo do array.
console.log(tasksList);

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

tasksList.shift();  // remove a primeira tarefa
console.log(tasksList);



// Exercicio 1:

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu1[1];

console.log(menuServices);

// Exercicio 2:

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercicio 3:

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato')

console.log(menu3);