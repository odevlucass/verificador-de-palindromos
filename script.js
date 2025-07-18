// Variavel com valor do input.
let inputPalavra = document.getElementById("inputPalavra");
// Variavel com o valor "mensagem".
let mensagem = document.getElementById("mensagem");

// Função para tratar a palavra que o usuario enviou.
function tratarPalavra() {
    // Aqui eu pego o valor da variavel "inputPalavra" e faço o tratamento.
    let palavra = inputPalavra.value.trim().toLowerCase();
    // Aqui eu aplico a logica do que o programa deve fazer.
    if (palavra === "") {
         exibirMensagem("Tente novamente pois o input está vazio");
        limparInput();

    } else {
        verificarPalavra(palavra)

    }
}
// Função principal para verificar se é palindromo ou não.
function verificarPalavra(palavra) {
    // Pego a palavra e trato ela.
    let palavraDoUsuarioInvertido = palavra.split("").reverse().join("");
    //Aqui eu crio a variavel para reiniciar o jogo.
    let buttonRestartGame = document.getElementById("restartGame");

    // Aqui eu aplico a logica do que o programa deve fazer.
    if (palavra !== palavraDoUsuarioInvertido) {
        // Aqui eu informo o resultado.
        exibirMensagem("A palavra não é um palíndromo");
        //Aqui eu deixo o input em branco.
        limparInput();
    } else {
         // Aqui eu informo o resultado.
        exibirMensagem("A palavra é um palíndromo");
        // Aqui eu limpo o input.
        limparInput();
    }

    // Nessa parte eu faço o botão "Reiniciar" aparecer.
    toggleBotaoReiniciar(true);
}

// Função para fazer o restart
function restartGame() {
    exibirMensagem("");
    toggleBotaoReiniciar(false);
}

// Função para exibir mensagens.
function exibirMensagem(texto) {
  mensagem.textContent = texto;
}

// Função para mostrar ou esconder botão.
function toggleBotaoReiniciar(visivel) {
  const button = document.getElementById("restartGame");
  button.classList.toggle("habilitado", visivel);
  button.classList.toggle("desabilitado", !visivel);
}

// Função para limpar o input.
function limparInput() {
  inputPalavra.value = "";
}