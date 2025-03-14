let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMenssagemInicial () {
    exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100:');
}

exibirMenssagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertoou!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!')
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior!')
        }
        tentativas++;
        limparCampo()
    }
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
   }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}