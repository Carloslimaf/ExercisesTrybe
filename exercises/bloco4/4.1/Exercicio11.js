let salarioBruto = 3000;
let inss;



if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
  console.log(inss);
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
    console.log(inss);
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
    console.log(inss);
} else {
    inss = 570.88;
    console.log(inss);
}

let salarioBase = salarioBruto - inss;
console.log(salarioBase);

let ir;

if (salarioBase <= 1903.98) {
  ir = 0;
  console.log(ir);
} else if (salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
    console.log(ir);
} else if (salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
    console.log(ir);
} else if (salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
    console.log(ir);
} else {
    ir = (salarioBase * 0.275) - 869.36;
    console.log(ir);
}

let salarioLiquido = salarioBase - ir;
console.log(salarioLiquido);

// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.