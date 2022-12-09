class Jogador {
    nome;
    pontuacao;
    albumJogador;

    constructor(nome) {
        this.nome = nome;
        this.pontuacao = 0;
        this.albumJogador = [];
    }
    static jogadoresDesafiantes = [];
}
module.exports = Jogador;