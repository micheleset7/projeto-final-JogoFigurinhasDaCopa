const PromptSync = require("prompt-sync");
const prompt = PromptSync();

const Tabuleiro = require('./Tabuleiro')
const Validacao = require('./Validacao')
const Jogador = require('./Jogador');
const Imprimir = require('./Imprimir');

let jogada = 1;
let qtdLinha = 3;
let qtdColuna = 6;

class Jogada {

    static jogada() {
        const tabuleiro = new Tabuleiro();

        for (let i = 0; i < qtdLinha; i++) {
            console.log(`\n ----- Jogada Nível ${i + 1} ---- \n`);

            for (let j = 0; j < qtdColuna; j++) {
                if (jogada == 1) {
                    jogada = 2;
                    console.log(`\n ${j + 1} Rodada - jogador: ${Jogador.jogadoresDesafiantes[0].nome}`);
                    Validacao.validarColunaLinha(tabuleiro);
                    Imprimir.gerarFigurinha(0);//aqui o 0 é o jogador na posiçao do arr [0] 
                } else {
                    jogada = 1;
                    console.log(`\n ${j + 1} Rodada - jogador: ${Jogador.jogadoresDesafiantes[1].nome}`);

                    Validacao.validarColunaLinha(tabuleiro);
                    Imprimir.gerarFigurinha(1); //aqui o 1 é o jogador na posiçao do arr [1]                
                }
            }

            console.log(`\n Final da última rodada do nível ${i + 1}. \n \n Pontuação: \n Jogador ${Jogador.jogadoresDesafiantes[0].nome}: ${Jogador.jogadoresDesafiantes[0].pontuacao};\n Jogador ${Jogador.jogadoresDesafiantes[1].nome}: ${Jogador.jogadoresDesafiantes[1].pontuacao};`);

            (Jogador.jogadoresDesafiantes[0].pontuacao > Jogador.jogadoresDesafiantes[1].pontuacao) ? console.log(`\n ${Jogador.jogadoresDesafiantes[0].nome}, você venceu a rodada. \n`) : console.log(`\n \n ${Jogador.jogadoresDesafiantes[1].nome}, você venceu a rodada.\n`);

            if (Jogador.jogadoresDesafiantes[0].pontuacao < Jogador.jogadoresDesafiantes[1].pontuacao) {

                if (i < 1) {
                    Imprimir.imprimirAlbunDesafiantes(0); //aqui o 0 indica o jogador na posiçao do arr [0]                          
                }

                if (i == 1) {
                    Imprimir.consequenciaNivel2(1, 0);
                }
                if (i < 1) { Imprimir.excluirUltimaFigurinha(Jogador.jogadoresDesafiantes[0]) };
            } else {

                if (i < 1) {
                    Imprimir.imprimirAlbunDesafiantes(1);
                }

                if (i == 1) {
                    Imprimir.consequenciaNivel2(0, 1);
                }

                if (i < 1) { Imprimir.excluirUltimaFigurinha(Jogador.jogadoresDesafiantes[1]) };
            }
            if (i < 2) {
                const continuar = prompt(`\n "Enter" para continuar`);
            } else {
                (Jogador.jogadoresDesafiantes[0].pontuacao > Jogador.jogadoresDesafiantes[1].pontuacao) ? console.log(`Parabéns,  ${Jogador.jogadoresDesafiantes[0].nome}! \n Você é o CAMPEÃO! `) : console.log(`Parabéns, ${Jogador.jogadoresDesafiantes[1].nome}!\n Você é o CAMPEÃO! `);
                Jogador.jogadoresDesafiantes = [];
            }
        }
    }
}
module.exports = Jogada;
