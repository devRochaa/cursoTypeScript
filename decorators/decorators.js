"use strict";
//decorator de classe
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(a, b) {
    return function (_) {
        console.log(a + ' ' + b);
    };
}
function logarObjeto(construtor) {
    console.log("Carregado...");
    return class extends construtor {
        constructor(...args) {
            console.log("antes..");
            super(...args);
            console.log("depois");
        }
    };
}
//@logarObjeto //colocar mais um decorator
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo..');
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
// (<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
//Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || usuarioLogado.admin === false) {
                throw new Error("Sem permissão!");
            }
        }
    };
}
//minha solução - errada pois ela é chamada assim que o ts carrega a classe, ou seja o usuario estiver deslogado nessa hora
//ele nao vai mais conseguir logar, na função corrigida assim que carrega a classe o constructor é alterado e é passaod a verificação
//nele, assim a verificação só ira ser feita quando ocorrer uma instancia
// function perfilAdmin (construtor: Construtor){
//   if(!usuarioLogado || usuarioLogado.admin === false){
//       throw new Error("Sem permissão!");
//   }
// }
new MudancaAdministrativa().critico();
//decorator de método
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        // if (valor <= this.saldo) {
        this.saldo -= valor;
        return true;
        // } else {
        //   return false
        // }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    freeze,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    freeze
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(1900.67);
cc.sacar(900);
cc.sacar(900);
cc.sacar(900);
console.log("depois de sacar " + cc.getSaldo());
// cc.getSaldo = function() {
//   return this['saldo'] + 8000
// }
//console.log("depois de tentar alterar: " + cc.getSaldo());
//Object.freeze
function freeze(alvo, nomePropiedade, descritor) {
    console.log(alvo);
    console.log(nomePropiedade);
    descritor.writable = false;
}
//decorator de atributo
function naoNegativo(alvo, nomePropiedade) {
    delete alvo[nomePropiedade];
    Object.defineProperty(alvo, nomePropiedade, {
        get: function () {
            return alvo["_" + nomePropiedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Inválido');
            }
            else {
                alvo["_" + nomePropiedade] = valor;
            }
        }
    });
}
//decorator de parametro de um método
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`alvo: ${alvo}`);
    console.log(`metodo: ${nomeMetodo}`);
    console.log(`inidice: ${indiceParam}`);
}
