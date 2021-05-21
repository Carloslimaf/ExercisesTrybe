let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let vezes = 0;

for (let index = 0; index < numbers.length; index += 1) {
  numbers[index]
    if (numbers[index]%2 == 1) {
      vezes +=1;      
  }      
}

if (vezes > 0) {
  console.log(vezes);
} else {
    console.log("nenhum valor ímpar encontrado");
}