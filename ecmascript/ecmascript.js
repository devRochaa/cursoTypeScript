"use strict";
// let e const
let seraQuePode = '?';
console.log(seraQuePode);
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const falarCom = (pessoa) => console.log('ola ' + pessoa);
falarCom('joão');
// descomentar e ver pelo console navegador
// function normalComThis(){
//   console.log(this);
// }
// normalComThis();
// const normalComThisEspecial = normalComThis.bind({ nome: 'ana'});
// normalComThisEspecial();
// const arrowComThis = ()=> console.log(this); //pega o this do escopo que esta escrito - contexto léxico
// arrowComThis();
//parametros padrão
function contagemRegressiva(inicio = 3, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva(5);
contagemRegressiva();
//spread e rest
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ['Fernando', 'Miguel'];
const turmaB = ['joao', ...turmaA, 'maria'];
console.log(turmaB);
function retornarArray(a, ...args) {
    console.log(a);
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6, 1312, 2313);
console.log(numeros);
//rest e spread ( tupla )
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//destructuring
const caracteristicas = ['motor 232', 2020];
//const motor = caracteristicas[0];
//const ano = caracteristicas[1];
const [motor, ano] = caracteristicas;
const [w, z] = [2, 3];
//destructuring objeto
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'importado',
    }
};
//const nomeItem = item.nome
//const preco = item.preco
const { nome: n, preco, caracteristicas: { w: t } } = item;
console.log(n);
console.log(t);
console.log(preco);
// desafio ecma
//1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
//2
const dizerOla = (nome = "Pessoa") => {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
//3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
//4
const array = [55, 20, ...nums];
console.log(array);
//5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
//6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
//calback
// function esperar3s(){
//   setTimeout(()=>{
//     console.log('3s dps');
//   }, 3000);
// }
// esperar3s();
// function esperar4s(callback: (dado: string) => void){
//   setTimeout(()=>{
//     callback('4s dps');
//   }, 4000);
// }
// esperar4s(function(resultado:string){
//   console.log(resultado);
// });
// //promises:
// function esperar5sPromise(){
//   return new Promise((resolve:any)=>{
//     setTimeout(()=>{
//     resolve('4s dps');
//   }, 5000);
//   })
// }
// esperar5sPromise().then(dado => console.log(dado));
// fetch('https://swapi.py4e.com/api/people/1')
//   .then(res => res.json())
//   .then(personagem => personagem.films)
//   .then(films => fetch(films[0]))
//   .then(resFilm => resFilm.json())
//   .then(filme => console.log(filme.title));
