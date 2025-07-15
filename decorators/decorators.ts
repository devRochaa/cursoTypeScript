//decorator de classe

function logarClasse(construtor: Function) {
  console.log(construtor);
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(a: string, b: number) {
  return function (_: Function): void {
    console.log(a + ' ' + b);

  }
}

// //@logarClasse
// //@decorator('teste', 123)
// // @logarClasseSe(true)
// @logarObjeto
// class Eletrodomestico {
//   constructor(){
//     console.log('novo..');
//   }
// }

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
  console.log("Carregado...");
  return class extends construtor {
    constructor(...args: any[]) {
      console.log("antes..");
      super(...args);
      console.log("depois");

    }
  }
}

// new Eletrodomestico()
// new Eletrodomestico()

interface Eletrodomestico {
  imprimir?(): void;
}
//@logarObjeto //colocar mais um decorator
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('novo..');
  }
}
function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  }
}

// (<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();




//Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true
}

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!')
  }
}

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args)
      if (!usuarioLogado || usuarioLogado.admin === false) {
        throw new Error("Sem permissão!");
      }
    }
  }
}

//minha solução - errada pois ela é chamada assim que o ts carrega a classe, ou seja o usuario estiver deslogado nessa hora
//ele nao vai mais conseguir logar, na função corrigida assim que carrega a classe o constructor é alterado e é passaod a verificação
//nele, assim a verificação só ira ser feita quando ocorrer uma instancia

// function perfilAdmin (construtor: Construtor){
//   if(!usuarioLogado || usuarioLogado.admin === false){
//       throw new Error("Sem permissão!");
//   }
// }

new MudancaAdministrativa().critico()

//decorator de método

class ContaCorrente {
  //@naoNegativo
  private saldo: number

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @freeze
  sacar(@paramInfo valor: number): boolean {
    // if (valor <= this.saldo) {
      this.saldo -= valor
      return true
    // } else {
    //   return false
    // }
  }

  @freeze
  getSaldo() {
    return this.saldo
  }
}

const cc = new ContaCorrente(1900.67)
cc.sacar(900);
cc.sacar(900);
cc.sacar(900);


console.log("depois de sacar " + cc.getSaldo());

// cc.getSaldo = function() {
//   return this['saldo'] + 8000
// }
//console.log("depois de tentar alterar: " + cc.getSaldo());

//Object.freeze
function freeze(alvo: any, nomePropiedade: string, descritor: PropertyDescriptor) {
  console.log(alvo);
  console.log(nomePropiedade);
  descritor.writable = false;
}

//decorator de atributo
function naoNegativo(alvo: any, nomePropiedade: string) {
  delete alvo[nomePropiedade];
  Object.defineProperty(alvo, nomePropiedade, {
    get: function (): any {
      return alvo["_" + nomePropiedade];
    },
    set: function (valor: any): void {
      if (valor < 0) {
        throw new Error('Saldo Inválido');
      } else {
        alvo["_" + nomePropiedade] = valor;
      }
    }
  })
}

//decorator de parametro de um método

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
  console.log(`alvo: ${alvo}`);
  console.log(`metodo: ${nomeMetodo}`);
  console.log(`inidice: ${indiceParam}`);
}