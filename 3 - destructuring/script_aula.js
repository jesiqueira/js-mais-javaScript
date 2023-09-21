// Destructuring
// Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.

const carro = {
  marca: "Fiat",
  ano: 2018,
  portas: 4,
};

const { marca, ano } = carro;

console.log(marca, ano);

// const cliente = {
//   nome: 'Edmar',
//   compras: {
//     digitais:{
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video Js', 'Video Html']
//     },
//     fisicos: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// const {livros, vidos} = cliente.compras.digitais
// console.log(livros, vidos);

// const {digitais, fisicos, digitais: {livros, videos}} = cliente.compras

// console.log(digitais);
// console.log(livros);

// Nomes das variáveis -> É necessário indicar o nome da propriedade que deseja desestruturar de um objeto. É possível mudar
// o nome da variável final com:

const cliente = {
  nome: "Andre",
  compras: 10,
};

// const {nome, compras} = cliente
// ou
const {nome: nomeCliente, compras: comprasClinete} =cliente

console.log(nomeCliente);
