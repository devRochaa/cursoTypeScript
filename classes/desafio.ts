// Exercício 1 - Classe

class Moto {
  private _velocidade: number = 0;
  constructor(public nome: string){}

  buzinar() {
    console.log('Toooooooooot!')
  }

  acelerar(delta:number) {
    this._velocidade = this._velocidade + delta;
  }

  
  get velocidade(): number {
    return this._velocidade;
  }
}
 
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança
abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0){}  
  abstract area():number;
}

class Retangulo extends Objeto2D{
  area(){
    return this.base * this.altura;
  }
} 

const retangulo = new Retangulo(2, 5);
retangulo.base = 5;
retangulo.altura = 7;
console.log("area: " + retangulo.area());
 
// Exercício 3 - Getters & Setters
class Estagiario{
  private _primeiroNome: string = "";
  constructor(){}

  get primeiroNome(){
    return this._primeiroNome;
  }

  set primeiroNome(nome:string){
    this._primeiroNome = nome.length >= 3 ? nome : '';
  }
}
const estagiario = new Estagiario(); 
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);