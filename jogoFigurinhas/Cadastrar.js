const Jogador = require("./Jogador");
const Game = require('./Game')
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let sair = false;

class Cadastrar {

    static cadastrarFigurinha() {
        sair = false;
        while (!sair) {
            const nome = prompt("Digite o nome  ");
            const posicao = prompt("Digite a posicao  ");
            const pontos = prompt("Digite e os pontos  ");
            const selecao = prompt("Digite a selecao  ");
            if (nome !== ""  && posicao !== "" && pontos !== "" && selecao!="") {           
                const novoFigurinha = new Game(nome, posicao, pontos,selecao);
                console.log("Figurinha cadastrada com sucesso!");
                sair = true;
            } else {
                console.log("Os campos não podem ser vazios. Digite novamente!");
            }
        }
    }
    static cadastrarParticipante() {
        Jogador.jogadoresDesafiantes = []
        console.log(`\n É preciso cadastrar 2 participante para iniciar o jogo.\n`);
        for (let i = 0; i < 2; i++) {
            sair = false;
            while (!sair) {
                console.log(`Cadastre o ${i + 1} participante.`);
                const nome = prompt("\n Digite seu nome:  ");
                if (nome !== "" ) {
                    const novoJogador = new Jogador();
                    novoJogador.nome = nome;

                    Jogador.jogadoresDesafiantes.push(novoJogador);
                    console.log(`\n Jogador Cadastrado com sucesso!`);
                    sair = true;
                } else {
                    console.log("\n O nome não pode seu vazio e tem que ser letras. Digite novamente!");
                }
            }
        }
    }
}

module.exports = Cadastrar;