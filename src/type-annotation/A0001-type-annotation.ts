/* eslint-disable */
let nome: string = 'Daniel';

let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;


//array
let arrayDeNumeros: Array<number> = [1,2, 3];
let arrayDeStrings: Array<string> = ["1", '2', 'tres'];
//ou
let arrayDeNumeros2: number[] = [1,2, 3];
let arrayDeStrings2: string[] = ["1", '2', 'tres'];

//objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 30,
    nome: "daniel"
};

// ? = opcional, os outros se tornam obrigatorios
console.log(pessoa.nome);

//função
function soma(x: number, y:number): number{
    return x+y;
}

const soma2:(x:number, y:number) => number = (x, y) => x + y;


