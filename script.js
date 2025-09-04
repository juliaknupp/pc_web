function listarTodosArguumentos() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

listarTodosArguumentos(1, 2, 3);

function somar(...valores) {
  let soma = 0;
  const qtd = valores.length;
  for (let i = 0; i < qtd; i++) {
    soma += valores[i];
  }
  return soma;
}
console.log(somar(1, 2));
console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4));

function soma(a, b){
    console.log(a +b);
}

soma(1, 2);

var numeros = [1, 2];
soma(...numeros);
