let custoProduto = 300;
let valorVenda = 1000;
let imposto = 300 * 0.2;
let quantidadeVendida = 40;
let custoTotal = custoProduto + imposto;
let lucro = valorVenda - custoTotal;
let lucroQuantidade = quantidadeVendida * lucro;

if (custoProduto < 0 || valorVenda < 0 || imposto < 0 || custoTotal < 0 || valorVenda < 0) {
  console.log("Erro: Todos os valores devem ser positivos!");
} else {
    console.log(lucroQuantidade);
}
