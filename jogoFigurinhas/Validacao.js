const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let sair = false;
let linha;
let coluna;

class Validacao {

    static validarColunaLinha(tabuleiro) {
        sair = false;

        while (!sair) {
            linha = Number(prompt(`Digite o número da linha:  `));
            if (linha >= 0 && linha <= 2) {
                    sair = true;
            } else {
                console.log("A linha tem que ser um número de 0 a 2.");
            }
        }

        sair = false;
        while (!sair) {
            coluna = Number(prompt(`Digite o número da coluna:  `));
            if (coluna >= 0 && coluna <= 5) {                
                    sair = true;
            } else {
                console.log("A coluna tem que ser um número de 0 a 5.");
            }
        }

        tabuleiro.gerarTabela(linha, coluna);
        console.log("\n** Duelo de figurinhas da Copa do Mundo **");
        console.table(tabuleiro.tabela);
    }
    
}
module.exports = Validacao;