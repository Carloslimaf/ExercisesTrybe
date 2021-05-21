let fruits = [3, 4, 10, 1, 12];
let somaFruits = 0;

for (let index = 0; index < fruits.length; index += 1) {
  somaFruits = somaFruits + fruits[index];  
}

if (somaFruits > 15) {
    console.log(somaFruits);
  } else {
      console.log("Valor menor que 16.");
  }