"use strict";
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'Daniel',
    idade: 27,
    saudar(sobrenome) {
        console.log("olá meu nome é " + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('rocha');
//saudarComOla({nome: 'jonas', idade: 28, wyz: true);
// usando classes
//quando você implementa ele não herda o codigo da interface passada, ele passa um 
//"contrato"/  obrigação de que você tem que adicionar td oq aquela interface tem
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCOmpra = new Date;
    }
    saudar(sobrenome) {
        console.log("olá meu nome é " + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
console.log(meuCliente.ultimaCOmpra);
let potencia;
potencia = function (base, exp) {
    //return Array(exp).fill(base).reduce((t, a) => t* a)
    return Math.pow(base, exp);
};
console.log(potencia(3, 3));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    ;
    b() { }
    ;
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function teste1(b) { }
teste1(new RealABC); // voce consegue rastrear o b no realABC 
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
x.log();
y.log();
const clie = { nome: 'pedro',
    toString() {
        return this.nome;
    }
};
clie.log();
