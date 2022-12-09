const Game=require('../jogoFigurinhas/Game')
const Jogador = require('../jogoFigurinhas/Jogador');
describe("Testando classes",()=>{
    test("Criar nome ",()=>{
      const desafiante=new Jogador("Maria");
      const nome=desafiante.nome
            expect(nome).toBe("Maria");
          }); 
    test("Validar nome",()=>{
      const desafiante=new Jogador("Maria");
      const nome=desafiante.nome
      const valida=nome==="Michele";
            expect(valida).toBe(false);
          }); 
    test("Inserir pontuação",()=>{
      const desafiante=new Jogador("Maria");
      desafiante.pontuacao=30;
            expect(desafiante.pontuacao).toBe(30);
          }); 
    test("Inserir figurinha no array album",()=>{
      const desafiante=new Jogador("Maria");
      desafiante.albumJogador.push("Figurinha1","Figurinha2");
            expect(desafiante.albumJogador[0]).toBe("Figurinha1");
          }); 
          test("Instanciando a classe game", ()=>{
            const game=new Game("Marta","Atacante",150,"Brasil")
            expect(game.nome).toBe("Marta");
            expect(game.posicao).toBe("Atacante");
            expect(game.pontos).toBe(150);
            expect(game.selecao).toBe("Brasil");
        });
        test("Pegando nome dafigurinha no array", ()=>{
            expect(Game.figurinhas[0].nome).toBe("Mbappé")
        });
        test("Pegando posição dafigurinha no array", ()=>{
            expect(Game.figurinhas[0].posicao).toBe("Atacante")
        });
        test("Pegando pontos dafigurinha no array", ()=>{
            expect(Game.figurinhas[0].pontos).toBe(160)
        });
        test("Pegando seleção dafigurinha no array", ()=>{
            expect(Game.figurinhas[0].selecao).toBe("França")
        });
  });