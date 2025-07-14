

interface Humano {
  nome: string,
  idade?: number,
  [prop: string]: any //se nao souber o nome nem tipo especifico dos proximos atributos
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano){
  console.log('Olá ' + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana';
}

const pessoa: Humano = {
  nome: 'Daniel',
  idade: 27,
  saudar(sobrenome: string){
    console.log("olá meu nome é " + this.nome + ' ' + sobrenome);
  }
    
}
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('rocha');
//saudarComOla({nome: 'jonas', idade: 28, wyz: true);

// usando classes

//quando você implementa ele não herda o codigo da interface passada, ele passa um 
//"contrato"/  obrigação de que você tem que adicionar td oq aquela interface tem
class Cliente implements Humano{ 
  nome: string = ''
  ultimaCOmpra: Date = new Date;
  saudar(sobrenome: string): void {
    console.log("olá meu nome é " + this.nome + ' ' + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
console.log(meuCliente.ultimaCOmpra);

//interface função

interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo;

potencia = function(base: number, exp: number): number {
  //return Array(exp).fill(base).reduce((t, a) => t* a)
  return base ** exp; 
}

console.log(potencia(3, 3));

// herança
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B { //extends passa os atributos diferente do implement
  c(): void;
}

class RealA implements A {
  a(): void{}
}

class RealAB implements A, B {
  a(): void{};
  b(): void {};
}

class RealABC implements ABC{
  a():void{}
  b():void{}
  c():void{}
}

function teste1(b: B){}

teste1(new RealABC);  // voce consegue rastrear o b no realABC 

abstract class AbstrataABD implements A,B { 
  a(): void{}
  b(): void{}
  abstract d(): void
}

//fazer método de ponto pelo js

interface Object {
  log(): void;
}

Object.prototype.log = function() {
    console.log(this.toString());
}

const x = 2;
const y = 3;
x.log();
y.log();

const clie = { nome: 'pedro', 
    toString(){
        return this.nome
    }
}
clie.log()

