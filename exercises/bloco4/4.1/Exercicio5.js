let a = 90;
let b = 60;
let c = 30;

let sumAngles = a+b+c;
let anglesPositive = a > 0 && b > 0 && c > 0;

if (anglesPositive){
  if (sumAngles === 180) {
    console.log(true);
  } else {
      console.log(false);
      console.log("A soma dos ângulos deve ter 180°");      
    }
} else {
    console.log("Erro: um ângulo deve ter um valor positivo!")
}