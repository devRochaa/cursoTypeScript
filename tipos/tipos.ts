let nome:string = 'joão';
console.log(nome);
//nome = 20;


// numbers = 27
let idade: number = 25;
idade = 27.5;
console.log(idade);

//boolean
let possuiHoobies:boolean = false;
//possuiHoobies = 1;
console.log(possuiHoobies);


//tipos explicitos

            // any
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);

//array
let hobbies: any[] = ["cozinhar", "praticar"];
console.log(typeof hobbies);
hobbies = [100];

//tuplas
let endereco: [string, number, number] = ["av principal", 99, 100];
console.log(endereco);
endereco = ["Rua Importante", 1260, 19];
console.log(endereco);

 // enums 
enum Cor{
  Cinza, //0
  Verde,  //1
  Azul = 100, //100 
  amarelo, //101
  vermelho = 100 // 100
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor[100]);


// any

let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019};
console.log(carro);

//funções

function retornaMeuNome(): string {
  // return Idade
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log('oi');
  //return minhaIdade;
}
digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
//console.log(multiplicar(2, 'numero'));
console.log(multiplicar(2, 3));

const teste = function (a: number, b: number): boolean {
  return false;
}

// tipo função
let calculo: (x: number, y: number) => number;
// calculo = digaOi;
// calculo();

calculo = multiplicar 
console.log(calculo(5, 6));

//objetos e tipos

let usuario: {nome: string, idade: number} = {
  nome: 'joão',
  idade: 27
};
console.log(usuario);
//usuario = {}

// usuario = {
  //   name: 'maria',
//   age: 18
// }

usuario = {
  idade: 31,
  nome: 'maria'
};
console.log(usuario);

console.log('d');

//desafio:

type Funcionario = {supervisores: string[], baterPonto(hora: number): string};

let funcionario: Funcionario = {
  supervisores: ["Daniel", "Fulano", "Ciclano"],
  
  baterPonto(horario: number): string {
  if(horario <= 8){
    return "Ponto Normal"
  }
  return "Fora do horário";
  }
}

let funcionario2: Funcionario = {
  supervisores: ["Daniel", "Fulano", "Ciclano"],
  
  baterPonto(horario: number): string {
  if(horario <= 8){
    return "Ponto Normal"
  }
  return "Fora do horário";
  }
}

console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
console.log(funcionario.supervisores);


//union types
let nota: number | string = 10;

console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//nota = true;


//checando tipos 
let valor = 30;

if(typeof valor === 'number') {
  console.log("number");
}else{
  console.log(typeof valor);
  
}

//never
function falha(msg: string): never { 
  throw new Error(msg);
}

const produto = {
  nome: 'sabao',
  preco: 1,
  validarProduto(){
    if(!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome');
    }
    if(this.preco < 0) {
      falha("Preco invalido");
    }
  }
}

produto.validarProduto();

let altura = 12
//altura = null
let alturaOpcional: null | number = 12;
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string 
  tel2: string | null
}

const contato1: Contato = {
  nome: 'fulano',
  tel1: '999090909',
  tel2: null,
}

let podeSerNulo = null //anny!
podeSerNulo = 12;
podeSerNulo ='abc'