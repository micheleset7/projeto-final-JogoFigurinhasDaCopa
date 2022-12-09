class Game {
    nome;
    posicao;
    pontos;
    selecao
    figurinhas;
    constructor(nome, posicao, pontos,selecao) {
        this.nome = nome;
        this.posicao = posicao;
        this.pontos = pontos;
        this.selecao=selecao;
        this.constructor.figurinhas.push({ "nome": this.nome, "posicao": this.posicao, "pontos": this.pontos , "selecao":this.selecao});
    }
    static figurinhas = [
        { "nome": "Mbappé", "posicao": "Atacante", "pontos": 160, "selecao": "França" },
        { "nome": "Messi", "posicao": "Atacante", "pontos": 120 , "selecao": "Argentina"},
        { "nome": "Cristiano Ronaldo", "posicao": "Atacante", "pontos": 100 , "selecao": "Portugal"},
        { "nome": "Neymar", "posicao": "Atacante", "pontos": 87 , "selecao": "Brasil"},
        { "nome": "Lewandowski ", "posicao": "Atacante", "pontos": 35 , "selecao": "Polônia"},
        { "nome": "Hazard", "posicao": "Atacante", "pontos": 31, "selecao": "Bélgica" },
        { "nome": "Bruyne", "posicao": "Atacante", "pontos": 29 , "selecao": "Bélgica"},
        { "nome": "Vinicius Junior", "posicao": "Atacante", "pontos": 120, "selecao": "Brasil" },
        { "nome": "Phil Foden", "posicao": "Meia", "pontos": 105 , "selecao": "Inglaterra"},
        { "nome": "Frederico Valverde", "posicao": "Meio-campista", "pontos": 21 , "selecao": "Inglaterra"},
        { "nome": "Jude Belligham", "posicao": "Meia", "pontos": 7 , "selecao": "Alemanha"},
        { "nome": "Pedri", "posicao": "Meio-campista", "pontos": 10 , "selecao": "Espanha"},
    ];
}
module.exports = Game;