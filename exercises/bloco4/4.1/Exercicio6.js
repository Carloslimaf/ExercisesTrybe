let chessPiece = "PEÃO"

switch (chessPiece.toLowerCase()) {
  case "peão":
    console.log("Peão - Anda apenas uma casa para frente, se for o primeiro movimento poderá andar duas.");
    break;

  case "torre":
    console.log("Torre - Anda livremente, mas apenas em linha reta horizontal e vertical.");
    break;

  case "cavalo":
    console.log("Cavalo - Anda em L, duas casas na vertical ou horizontal e mais uma casa completando um 'L'.")
    break;

  case "bispo":
    console.log("Bispo - Anda livremente, mas apenas em diagonal.");
    break;

  case "rainha":
    console.log("Rainha - Anda livremente em qualquer direção.");
    break;

  case "rei":
    console.log("Rei - Anda apenas uma casa em qualquer direção.");
    break;

  default:
    console.log("Erro: Peça inválida!");
}

