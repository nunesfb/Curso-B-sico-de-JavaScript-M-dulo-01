//criamos uma função chamada adicionarDiasData
function adicionarDiasData(dias){
  //declaramos a variavel chamada hoje com o valor da data atual
  var hoje        = new Date();
  //visualizamos a data atual no console
  console.log("Data Atual: " + hoje); 

  //efetuamos a soma dos dias à data atual e convertermos de milissegundos em dias
  //caso queria subtrair, somente trocar o sinal de + para -
  var dataSomada    = new Date(hoje.getTime() - (dias * 24 * 60 * 60 * 1000));
  //visualizamos a data completa com os dias somados no console
  console.log("Data Somada: " + dataSomada); 

  //retornamos a data com os dias somados
  return dataSomada.getDate() + "/" + (dataSomada.getMonth() + 1) + "/" + dataSomada.getFullYear();
}

//efetuamos a chamada da função adicionarDiasData
//passamos o número de 12 dias para ser somado
var novaData = adicionarDiasData(12);
//visualizamos a data com os dias somados no console
console.log("Data Somada e Formatada: " + novaData);


