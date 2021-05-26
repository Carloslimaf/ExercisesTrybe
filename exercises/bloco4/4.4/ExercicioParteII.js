// Exercicio 1

function verificaPalindrome (palavra) {
    let inverso = palavra.split('').reverse().join('');

    if (inverso === palavra) {
      return true;
    } else {
      return false;
    }
  }

  console.log(verificaPalindrome('ana'));

  // Exercicio 2

  let array = [2,3,4,5,1,6,10,7];

  function arrayInteiros (array) {
    
    
    for (let index = 0; index < array.length; index += 1){
      let maiorNumero = 0;

      if (array[index] > maiorNumero) {
        array[index] = maiorNumero;
      }
    }

    return maiorNumero;
  }

console.log(arrayInteiros(array))