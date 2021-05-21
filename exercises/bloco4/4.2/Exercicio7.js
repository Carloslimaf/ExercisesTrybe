let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;



for (let index = 0; index < numbers.length; index += 1) {
  somaNumbers = somaNumbers + numbers[index];  
}

console.log("Soma:", somaNumbers);

let menorNumber = somaNumbers;

for (let index = 0; index < numbers.length; index += 1) {
  numbers[index]

    if (numbers[index] < menorNumber) {
        menorNumber = numbers[index]; 
  }       
}


console.log("Menor valor:", menorNumber);