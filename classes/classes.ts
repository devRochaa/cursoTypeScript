class Data {
  //publico por padrão
  dia: number
  public mes: number
  ano: number
  
  constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
    this.dia = dia,
    this.mes = mes,
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data; // pode omitir os '{}'
casamento.ano = 2017;
console.log(casamento);


class DataEsperta {
  constructor(public dia: number = 1, public mes: number = 1, 
    public ano: number = 1970){}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta; // pode omitir os '{}'
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

//desafio classe produto

class Produto{
  constructor(public nome: string, public preco: number, public desconto: number = 0){}

  public resumo():string {
    return `${this.nome} custa R$${this.precoComDesconto()}, (${this.desconto * 100}% OFF) `;
  }

  //tb é public
  precoComDesconto():number{
    return this.preco * (1 -this.desconto);
  }
}

const agua = new Produto( 'agua', 3 );
console.log(agua.resumo());

const camisa = new Produto( 'Camisa', 3 , 0.12);
camisa.desconto = 0.15;
console.log(camisa.resumo());


class Carro{
  private velocidadeAtual: number = 0;
  constructor(public modelo:string, public marca: string, private velocidadeMaxima: number = 200) {
  }

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
    if(velocidadeValida){
      this.velocidadeAtual = novaVelocidade;
    }else{
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }
  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro('Ford', 'Ka', 185);
console.log(carro1.acelerar());

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number){
    super('Ferrari', modelo, velocidadeMaxima);
  }

   public acelerar(): number {
    return this.alterarVelocidade(20);
  }
  public frear(): number {
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
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor:number) {
    if(valor >= 0 && valor <=120){
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
class Matematica {;
  static PI: number = 3.1416;

  static areaCirc(raio : number): number {
    return Matematica.PI * raio * raio
  }
}
// const m1 = new Matematica();
// m1.PI = 4.2
// console.log(m1.areaCirc(4));


console.log(Matematica.areaCirc(4));
//da pra usar sem tem que definir uma nova instancia
// membros no nivel da classe e nao disponivel em as auma das instancias


// Classe abstrata
abstract class Calculo {
 protected resultado: number = 0;

 abstract executar(...numeros: number[]): void;

 getResultado(): number {
  return this.resultado;
 }
}
//new Calculo();
// não vai poder instanciar a classe

class Soma extends Calculo{
  executar(...numeros: number[]): void{
    this.resultado = numeros.reduce((ac,v) => ac+v);
  }
}
class Multiplicacao extends Calculo{
  executar(...numeros: number[]): void{
    this.resultado = numeros.reduce((ac,v) => ac*v);
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
  private static instance: Unico = new Unico;
  private constructor() { }

  static getInstance() {
    return Unico.instance
  }

  agora() {
    return new Date;
  }
}

// const errado = new Unico();
console.log(Unico.getInstance().agora()); //certo

//atributos somente leitura só pode setar uma vez
class Aviao {
  public readonly modelo: string
  
  constructor(modelo: string, public readonly prefixo: string){
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao('tu-114', 'pt-abc');
// turboHelice.modelo = 'dc-8';
// turboHelice.prefixo = 'pt-def';
console.log(turboHelice);
