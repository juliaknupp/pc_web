<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Jogo da Forca</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f8f8f8;
      padding: 30px;
    }

    h1 {
      margin-bottom: 20px;
    }

    #palavra {
      font-size: 2em;
      letter-spacing: 10px;
      margin-bottom: 20px;
    }

    #letras {
      margin: 20px;
    }

    .letra-btn {
      padding: 10px;
      margin: 3px;
      font-size: 18px;
      cursor: pointer;
    }

    .letra-btn:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    #mensagem {
      font-size: 1.2em;
      margin-top: 20px;
      font-weight: bold;
    }

    #boneco {
      width: 120px;
      height: 180px;
      margin: 0 auto 20px;
      position: relative;
    }

    .parte {
      display: none;
      position: absolute;
      background-color: black;
    }

    #cabeca {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      top: 0;
      left: 45px;
    }

    #tronco {
      width: 10px;
      height: 50px;
      top: 30px;
      left: 55px;
    }

    #bracoE {
      width: 40px;
      height: 5px;
      top: 40px;
      left: 15px;
      transform: rotate(30deg);
      transform-origin: right;
    }

    #bracoD {
      width: 40px;
      height: 5px;
      top: 40px;
      left: 65px;
      transform: rotate(-30deg);
      transform-origin: left;
    }

    #pernaE {
      width: 40px;
      height: 5px;
      top: 80px;
      left: 15px;
      transform: rotate(-30deg);
      transform-origin: right;
    }

    #pernaD {
      width: 40px;
      height: 5px;
      top: 80px;
      left: 65px;
      transform: rotate(30deg);
      transform-origin: left;
    }

    button#reiniciar {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
    }
  </style>
</head>
<body>

  <h1>Jogo da Forca</h1>

  <div id="boneco">
    <div id="cabeca" class="parte"></div>
    <div id="tronco" class="parte"></div>
    <div id="bracoE" class="parte"></div>
    <div id="bracoD" class="parte"></div>
    <div id="pernaE" class="parte"></div>
    <div id="pernaD" class="parte"></div>
  </div>

  <div id="palavra"></div>
  <div id="letras"></div>
  <div id="mensagem"></div>
  <button id="reiniciar" onclick="iniciarJogo()">Reiniciar</button>

  <script>
    const palavras = ["BANANA", "ESCOLA", "CACHORRO", "GUITARRA", "JANELA"];
    const maxErros = 5;
    let palavraSorteada = "";
    let letrasCorretas = [];
    let erros = 0;

    function iniciarJogo() {
      palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
      letrasCorretas = [];
      erros = 0;
      document.getElementById("mensagem").textContent = "";
      document.querySelectorAll(".parte").forEach(parte => parte.style.display = "none");
      mostrarPalavra();
      criarBotoes();
    }

    function mostrarPalavra() {
      const display = palavraSorteada.split("").map(letra =>
        letrasCorretas.includes(letra) ? letra : "_"
      ).join(" ");
      document.getElementById("palavra").textContent = display;
    }

    function criarBotoes() {
      const container = document.getElementById("letras");
      container.innerHTML = "";
      for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const btn = document.createElement("button");
        btn.textContent = letra;
        btn.className = "letra-btn";
        btn.onclick = () => testarLetra(letra, btn);
        container.appendChild(btn);
      }
    }

    function testarLetra(letra, botao) {
      botao.disabled = true;
      if (palavraSorteada.includes(letra)) {
        letrasCorretas.push(letra);
        mostrarPalavra();
        verificarVitoria();
      } else {
        erros++;
        mostrarParteDoBoneco(erros);
        if (erros >= maxErros) {
          document.getElementById("mensagem").textContent = "Você perdeu! A palavra era: " + palavraSorteada;
          desativarBotoes();
        }
      }
    }

    function mostrarParteDoBoneco(erro) {
      const partes = ["cabeca", "tronco", "bracoE", "bracoD", "pernaE", "pernaD"];
      if (erro <= partes.length) {
        document.getElementById(partes[erro - 1]).style.display = "block";
      }
    }

    function verificarVitoria() {
      const ganhou = palavraSorteada.split("").every(letra => letrasCorretas.includes(letra));
      if (ganhou) {
        document.getElementById("mensagem").textContent = "Parabéns, você venceu!";
        desativarBotoes();
      }
    }

    function desativarBotoes() {
      document.querySelectorAll(".letra-btn").forEach(btn => btn.disabled = true);
    }

    iniciarJogo();
  </script>
</body>
</html>
