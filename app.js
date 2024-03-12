let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentavivas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Hora do Desafio');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let palavraTentaviva = tentavivas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentavivas} ${palavraTentaviva}`;
        exibirTextoNaTela('h1', `Acertou!`);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O númeo secreto é maior que ${chute}`);
        }
        tentavivas ++;
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElentosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElentosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentavivas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



// let frutas = ["Maçã", "Laranja", "Banana"];
// console.log(frutas, frutas[1], frutas.length);
// frutas.pop();
// console.log(frutas);
// frutas.push("Abacaxi");
// console.log(frutas);
// frutas.push("");
// frutas.push(25);
// console.log(frutas, frutas.length);
// frutas.splice(0, 1) // o primeiro indix(0) seleciona o elemento(maçã), e o segundo exclui aparti dele no caso aqui excluiu o elemento zero(maçã); 
// console.log(frutas);




// exercícios resolvidos //
// IMC Início //
// let altura = prompt('Digite sua altura '); 
// let peso = prompt('Digite seu peso: ');

// function imc(altura, peso) {
//     let media = parseFloat(peso / (altura * 2)).toFixed(2);
//     return alert(media);
// }
// imc(altura, peso);
// IMC Fim //


// Fatorial início //
// let fatorial = prompt('Digite um número fatorial: ');
// let resultado = fatorial;
// for (let i = 1; i < fatorial; i++) {
//     resultado *= i;
// }
// console.log(resultado);
// Fatorial Fim //


// Início da Troca de Dólar //
// let reais = 4.80; // dólar($ 1.00) = reais (R$ 4.80);
// let valorEmDolares = prompt('Digite quantos dólares você gostaria de trocar: ');

// function trocaDolares(dolar, reais) {
//    let resultado = dolar * reais;
//    return  (` O valor em reais deu R$ ${(parseFloat(resultado).toFixed(2))}`);
// }
// console.log(trocaDolares(valorEmDolares, reais));
// Fim da Troca de Dólar //



// Início da área e o perímetro de um retângulo//

// let altura = prompt('Digite a altura do retângulo: ');
// let largura = prompt('Digite a largura do retângulo: ');

// function areaEPerimetroDoRetangulo(altura, largura) {
//     let perimetroRetangular = (altura * 2) + (largura * 2); // é a soma de todos os lados;
//     let areaDoRetangulo = altura * largura;   
    
//     return (` A área do retângulo é de ${areaDoRetangulo}, e o perímetro do retângulo é ${perimetroRetangular}`);
// }

// console.log(areaEPerimetroDoRetangulo(altura, largura));

// Fim da área e o perímetro de um retângulo//


// Início da tabuada //
// let valorTabuada = prompt('Digite o valor da tabuada: ');

// function tabuada(valortabuada) {
//     for(let i = 1; i < valortabuada; i++) {
//         let resultadoTabuada = valorTabuada * i;

//         console.log(resultadoTabuada);    
//     }
// }
// console.log(tabuada(valorTabuada));
// Fim da tabuada //



// Área e Perímetro de círculo Início //

// let raio = prompt('Digite o raio de um círculo: ');
// let pi = 3.14; // // podemos usar o número radomico ex: Math.PI; // //

// function areaEPerimetroDeUmCirculo(raio, pi) {
//     let areaDoCirculo = pi * raio * raio;
//     let perimetroDoCirculo = 2 * Math.PI * raio;
//     return (`A área do círculo é de ${areaDoCirculo.toFixed(2)}, e o perímetro do círculo é ${perimetroDoCirculo.toFixed(2)}`);
// }
// console.log(areaEPerimetroDeUmCirculo(raio, pi));

// Área e Perímetro de círculo Fim //