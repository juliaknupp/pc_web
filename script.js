const itens = [
  {
    nome: "Café Espresso",
    preco: 8.0,
    img: "https://uploads.metroimg.com/wp-content/uploads/2019/10/17184313/190115JB-Koppe-cafes-especiais-0121.jpg",
  },
  {
    nome: "Capuccino",
    preco: 12.0,
    img: "https://www.minhareceita.com.br/app/uploads/2024/07/mobile-capuccino.jpg",
  },
  {
    nome: "Suco de Laranja",
    preco: 10.0,
    img: "https://cardapio.primeirobar.com.br/wp-content/uploads/2022/04/laranja.jpg",
  },
  {
    nome: "Água mineral",
    preco: 6.0,
    img: "https://fontagua.com.br/wp-content/uploads/2019/02/splash_350ml.jpg",
  },
  {
    nome: "Fatia de bolo",
    preco: 12.0,
    img: "https://cdn.awsli.com.br/2500x2500/2658/2658919/produto/257217444/fatia-de-bolo-vegano-de-brigadeiro-com-morangos-sem-gl-ten-fnv2j0u5hp.png",
  },
  {
    nome: "Sanduíche natural",
    preco: 15.0,
    img: "https://guiadacozinha.com.br/wp-content/uploads/2014/01/Sanduiche-natural-768x619.jpg",
  },
  {
    nome: "Croissant",
    preco: 17.0,
    img: "https://www.fornodeminas.com.br/wp-content/uploads/2018/06/croissant.jpg",
  },
];

const cafet = document.getElementById("cardapio");
let i =0;
itens forEach item =>
    let li = document.createElement('li');
    li textContent = item nome;
    cardapio.appendChild(li);

    let preco = document.createElement('p')
    preco textContent ='R$'+ item preco;
    li.appendChild(preco);

    let img = document.createElement('img')
    img scr =item img;
    li.appendChild(img);

    let botao = document.createElement('button');
    
