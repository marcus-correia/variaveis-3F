let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Marcus Vinícius Correia";

console.log( "Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos ");

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);

//Agência de viagens Argentina Malta Espanha Chile Indonésia
const listaDeDestinos = new Array(
  "Argentina",
  "Malta",
  "Espanha",
  "Chile",
  "Indonésia"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[4]);
listaDeDestinos.push("Coronel Vivida")
listaDeDestinos.push("Estocolmo")
listaDeDestinos.push("Liubliana")
listaDeDestinos.push("Roma")
console.log(listaDeDestinos);