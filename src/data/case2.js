// ─── case2.js (versão melhorada) ────────────────────────────
const case2 = {
  id: 2,
  difficulty: "INTERMEDIÁRIO",
  diffColor: "#ffd600",
  title: "A Queda do Servidor",
  subtitle: "O banco de dados parou de responder às 03h da manhã...",

  // Grid 12x12 com leve aumento de complexidade
  grid: [
    ["P","Y","T","H","O","N","X","K","L","M","N","O"],   // PYTHON →
    ["B","A","C","K","E","N","D","Q","S","E","R","V"],   // BACKEND →
    ["E","M","E","R","S","O","N","X","E","R","X","X"],   // EMERSON →
    ["T","H","Y","A","G","O","B","C","S","U","X","X"],   // THYAGO →
    ["T","O","K","E","N","R","Y","Z","I","O","X","X"],   // TOKEN →
    ["S","E","R","V","E","R","A","P","O","S","X","X"],   // SERVER →
    ["D","A","T","A","B","A","S","E","X","C","X","X"],   // DATABASE →
    ["Q","U","E","R","Y","L","O","G","S","D","X","X"],   // QUERY →
    ["A","U","T","H","X","J","W","K","L","P","X","X"],   // AUTH (extra contextual)
    ["D","E","B","U","G","M","N","B","V","C","X","X"],   // DEBUG (extra)
    ["C","A","C","H","E","Z","X","C","I","B","X","X"],   // CACHE →
    ["S","E","S","S","I","O","N","A","O","D","X","X"],   // SESSION →
  ],

  wordList: [
    // → horizontais (principais)
    { word: "PYTHON",
      cells: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:0,c:5}] },

    { word: "BACKEND",
      cells: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:1,c:4},{r:1,c:5},{r:1,c:6}] },

    { word: "EMERSON",
      cells: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:2,c:5},{r:2,c:6}] },

    { word: "THYAGO",
      cells: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4},{r:3,c:5}] },

    { word: "TOKEN",
      cells: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}] },

    { word: "SERVER",
      cells: [{r:5,c:0},{r:5,c:1},{r:5,c:2},{r:5,c:3},{r:5,c:4},{r:5,c:5}] },

    { word: "DATABASE",
      cells: [{r:6,c:0},{r:6,c:1},{r:6,c:2},{r:6,c:3},{r:6,c:4},{r:6,c:5},{r:6,c:6},{r:6,c:7}] },

    { word: "CACHE",
      cells: [{r:10,c:0},{r:10,c:1},{r:10,c:2},{r:10,c:3},{r:10,c:4}] },

    { word: "SESSION",
      cells: [{r:11,c:0},{r:11,c:1},{r:11,c:2},{r:11,c:3},{r:11,c:4},{r:11,c:5},{r:11,c:6}] },

    // ← invertido (leve aumento de dificuldade)
    { word: "QUERY",
      cells: [{r:7,c:4},{r:7,c:3},{r:7,c:2},{r:7,c:1},{r:7,c:0}] },

    // ↓ vertical (novo, mas simples)
    { word: "AUTH",
      cells: [{r:8,c:0},{r:7,c:0},{r:6,c:0},{r:5,c:0}] },

    // ↘ diagonal leve
    { word: "LOG",
      cells: [{r:7,c:5},{r:8,c:6},{r:9,c:7}] },
  ],

  clues: [
    "O erro está relacionado ao backend",
    "A falha envolvia tokens e sessão",
    "Logs mostram problema na camada de dados",
    "Alguém tentou mascarar o erro usando debug",
  ],

  suspects: ["EMERSON","THYAGO","KLAYVERTON","ISABELLE"],
  languages: ["PYTHON","JAVA","GO","RUBY"],
  locations: ["BACKEND","FRONTEND","MOBILE","DEVOPS"],

  culprit: "EMERSON",
  language: "PYTHON",
  location: "BACKEND",

  explanation: `
  - BACKEND + DATABASE indicam onde ocorreu a falha
  - TOKEN + SESSION mostram problema de autenticação
  - CACHE sugere inconsistência de dados
  - LOG + QUERY indicam origem do erro
  - DEBUG aparece como tentativa de esconder o problema

  EMERSON aparece diretamente ligado ao backend e aos dados,
  sendo o responsável pela queda do servidor.
  `,
};

export default case2;