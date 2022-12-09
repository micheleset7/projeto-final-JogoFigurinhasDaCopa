const PromptSync = require("prompt-sync");
const prompt = PromptSync();

const Cadastrar = require('./Cadastrar');
const Jogada = require("./Jogada");
const Deletar = require("./Deletar");
const Imprimir = require("./Imprimir");
const Jogador = require("./Jogador");

class Menu {

    static menu() {
        let sair = false;
        console.log("           ( Bem vindo ao jogo )     ");
        do {
            console.log("=================================================");
            console.log("      DUELO DE FIGURINHAS DA COPA DO MUNDO      ");
            console.log("================================================= \n");
            let opcao = Number(prompt(" \n [1] - Iniciar o jogo; \n [2] - Cadastrar figurinha; \n [3] - Deletar figurinha;\n [4] - Ver lista de figurinhas disponíveis;\n [5] - Cadastrar participantes; \n [0] - sair; "));
            switch (opcao) {
                case 0: {
                    console.log("\n ***** Fim de jogo! *****");
                    sair = true;
                } break;
                case 1: {
                    (Jogador.jogadoresDesafiantes.length == 2) ? Jogada.jogada() : console.log("\n*** Atenção! ***\n Para iniciar a partida é preciso ter dois participantes cadastrados, cadastre-se!");
                }; break;
                case 2: Cadastrar.cadastrarFigurinha(); break;
                case 3: Deletar.deletarFigurinha(); break;
                case 4: Imprimir.imprimir(); break;
                case 5: Cadastrar.cadastrarParticipante(); break;
                default: return ("Error! Digite uma opção válida!");
            }
        } while (!sair)
    }
}
Menu.menu();