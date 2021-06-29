const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => {
  for (let i = 0; i < curr.length; i += 1) {
  curr[i].toLocaleLowerCase() === 'a' ? acc += 1 : acc += 0;
  }
  return acc;
  }, 0);
  } 

assert.deepStrictEqual(containsA(), 20);