"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia,
            this.mes = mes,
            this.ano = ano;
    }
}
exports.Data = Data;
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // pode omitir os '{}'
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // pode omitir os '{}'
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
//desafio classe produto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()}, (${this.desconto * 100}% OFF) `;
    }
    //tb é public
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const agua = new Produto('agua', 3);
console.log(agua.resumo());
const camisa = new Produto('Camisa', 3, 0.12);
camisa.desconto = 0.15;
console.log(camisa.resumo());
class Carro {
    constructor(modelo, marca, velocidadeMaxima = 200) {
        this.modelo = modelo;
        this.marca = marca;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
console.log(carro1.acelerar());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(f40.marca + " " + f40.modelo);
console.log(f40.acelerar());
console.log(f40.frear());
// private - utilizavel apenas na classe
// protected - utilizavel na classe e na herança
// public - todo mundo
// Getters & setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const p1 = new Pessoa;
p1.idade = 10;
console.log(p1);
p1.idade = -3;
console.log(p1);
// Static - Estáticos
class Matematica {
    ;
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica();
// m1.PI = 4.2
// console.log(m1.areaCirc(4));
console.log(Matematica.areaCirc(4));
//da pra usar sem tem que definir uma nova instancia
// membros no nivel da classe e nao disponivel em as auma das instancias
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
//new Calculo();
// não vai poder instanciar a classe
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((ac, v) => ac + v);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((ac, v) => ac * v);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// singletown
//voce cria uma unica instancia dentro da classe para poder ser usada atraves do getinstance()
//serve para ter uma unica (ou varias, caso de conexoes..) instancia e tambpém trabalhar melhor com heranças
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const errado = new Unico();
console.log(Unico.getInstance().agora()); //certo
//atributos somente leitura só pode setar uma vez
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('tu-114', 'pt-abc');
// turboHelice.modelo = 'dc-8';
// turboHelice.prefixo = 'pt-def';
console.log(turboHelice);
