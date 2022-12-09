const PromptSync = require("prompt-sync");
const prompt = PromptSync();
const Game = require('./Game');
const Jogador = require('./Jogador');


class Imprimir {

    static imprimirAlbunDesafiantes(jogador) {
        for (let item of Jogador.jogadoresDesafiantes[jogador].albumJogador) {
            console.log(`Nome:${item.nome} Pontos:${item.pontos} `);
        }
    }

    static imprimir() {//MUDAR O NOME PARA IMPRIMIRlISTAFIGURINHAS
        console.log("===== Lista de figurinhas ===== \n");
        for (let i = 0; i < Game.figurinhas.length; i++) {
            console.log(`${i + 1} - Nome: ${Game.figurinhas[i].nome} -  Posição: ${Game.figurinhas[i].posicao} - Pontos: ${Game.figurinhas[i].pontos} - Seleção: ${Game.figurinhas[i].selecao}`);
        }
    }
    static excluirUltimaFigurinha(jogador) {
        jogador.albumJogador.pop();
        console.log(`\n ${jogador.nome}, esses são seus jogadores e como punição pela baixa pontuação na rodada, perderá o último jogador conquistado`);
    }

    static gerarFigurinha(jogador) {
        let num = Math.floor(Math.random() * Game.figurinhas.length);
        Jogador.jogadoresDesafiantes[jogador].pontuacao += Game.figurinhas[num].pontos;
        Jogador.jogadoresDesafiantes[jogador].albumJogador.push({ "nome": Game.figurinhas[num].nome, "posicao": Game.figurinhas[num].posicao, "pontos": Game.figurinhas[num].pontos },);
        console.log(`\n Figurinha - Nome: ${Game.figurinhas[num].nome} Pontos: ${Game.figurinhas[num].pontos} Seleção: ${Game.figurinhas[num].selecao}`);

    }

    static consequenciaNivel2(jogadorGanhou, jogadorPerdeu) {
        let nome;
        let sair = false;
        console.log(`\n ${Jogador.jogadoresDesafiantes[jogadorGanhou].nome}, voce tem direito a excluir qualquer  figurinha do seu adversário como premiação pela vitória do Nível 2.\n`);
        for (let item of Jogador.jogadoresDesafiantes[jogadorPerdeu].albumJogador) {//está exibindo o album do adversario
            console.log(`Nome:${item.nome} Pontos:${item.pontos} `);
        }

        while (!sair) {
            sair = false;
            nome = prompt("Digite o nome da figurinha que deseja deletar.");
            for (let item of Jogador.jogadoresDesafiantes[jogadorPerdeu].albumJogador) {
                if (item.nome == nome) {
                    sair = true;
                }
            }
        }
        let novoArr = Jogador.jogadoresDesafiantes[jogadorPerdeu].albumJogador.filter(item => { return item.nome != nome });
        Jogador.jogadoresDesafiantes[jogadorPerdeu].albumJogador = [];
        for (let item of novoArr) {
            Jogador.jogadoresDesafiantes[jogadorPerdeu].albumJogador.push({ "nome": item.nome, "posicao": item.posicao, "pontos": item.pontos, "selecao": item.selecao });
        };
    }
}
module.exports = Imprimir;