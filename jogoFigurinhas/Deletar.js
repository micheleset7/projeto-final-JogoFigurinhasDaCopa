const PromptSync = require("prompt-sync");
const prompt = PromptSync();
const Game = require('./Game');
let sair = false;
class Deletar {

    static deletarFigurinha() {
        let nome;
        sair=false;
        while (!sair) {
            nome = prompt("Digite o nome da figurinha do jogador que deseja deletar.");
            for (let item of Game.figurinhas) {
                if (item.nome == nome) {
                    sair = true;
                }                
            }
        }
        let novoArray = Game.figurinhas.filter(item => { return item.nome != nome });
        Game.figurinhas = [];
        for (let item of novoArray) {
            Game.figurinhas.push({ "nome": item.nome, "posicao": item.posicao, "pontos": item.pontos, "selecao": item.selecao });
        }
        console.log("Figurinha deletada com sucesso!");
    }
}
module.exports = Deletar;