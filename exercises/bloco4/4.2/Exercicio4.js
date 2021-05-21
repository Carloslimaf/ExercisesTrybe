let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;


for (let index = 0; index < numbers.length; index += 1) {
  somaNumbers = somaNumbers + numbers[index];      
}

console.log("Soma:", somaNumbers);

let  mediaNumbers = somaNumbers / numbers.length;

console.log("Elementos:", numbers.length);

console.log("Média:", mediaNumbers);

if (mediaNumbers > 20) {
  console.log("Valor maior que 20!");
} else {
  console.log("Valor menor que 20!");
}