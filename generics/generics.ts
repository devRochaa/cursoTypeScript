import { Data } from '../classes/classes';

function echo(objeto: any){
  return objeto;
}

console.log(echo('joão').length);
console.log(echo(27).length); //undefined
console.log(echo({nome: 'joão'}).length); //undefined

//a ideia é que usando generics avise durante a programacao

//usando generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO{
  return objeto;
}

console.log(echoMelhorado('joão').length);
//console.log(echoMelhorado(27).length); 
//console.log(echoMelhorado({nome: 'joão'}).length); 
//console.log(echoMelhorado<number>('27')); //especifica o tipo T 

//GENERICS disponiveis na API

const avaliacoes: Array<number> = [10, 9.3, 7.7];

avaliacoes.push(8.4);
//avaliacoes.push('5.5')

// array
function imprimir<T>(args: T[]){
  args.forEach(elemento => console.log(elemento))
}

imprimir([1,2,3]);
imprimir<number>([1,2,3]);
imprimir<string>(['1','2','3']);
imprimir<{nome: string, idade: number}>([
  {nome: 'fulano', idade: 22},
  {nome: 'cilano', idade: 26},
  {nome: 'ciclano', idade: 24},
])

type Aluno = { nome: string, idade: number}

imprimir<Aluno>([
  {nome: 'fulano', idade: 22},
  {nome: 'cilano', idade: 26},
  {nome: 'ciclano', idade: 24},
]);

// tipo generico
type Echo =  <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('alguma coisa'));

//class com generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T){}

  abstract executar(): R
}
  
class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(1 ,2).executar());

// console.log(new OperacaoBinarioa('Bom', 'dia').executar());
// console.log(new OperacaoBinarioa(3, 7).executar());
// console.log(new OperacaoBinarioa(3, 'OPA').executar());
// console.log(new OperacaoBinarioa({}, {}).executar());

class SubtraiDatas extends OperacaoBinaria<Data, string>{
  getTime(data: Data): number {
    let { dia ,mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();  
  }

  executar(): string {
    const t1 = this.getTime(this.operando1) 
    const t2 = this.getTime(this.operando2)
    const diff = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24;
    return `${Math.round(diff/ dia)} dia(s)`;
  }
}

const meuniver = new Data(13, 7, 2025);
const hoje = new Data(14, 7, 2025);
console.log(new SubtraiDatas(hoje, meuniver).executar());

// desafio Classe Fila
// atributo: fila (array)
//métodos: entrar, proximo, imprimir

class Fila <T extends number | string>{ //constraints - restringir mais os tipos genéricos
  private fila: Array<T>
  constructor(...args: T[]){
    this.fila = args;
  }

  imprimir(){
    console.log(this.fila);
  }
  
  entrar(...elemento: T[]){
    this.fila.push(...elemento);
  }

  proximo(): T | null{
    if(this.fila.length > 0 && this.fila){
      const primeiro = this.fila[0];
      this.fila.splice(0 ,1);
      return primeiro;
    }else {
      return null;
    }
  }
}

const FilaDePessoas = new Fila<string>("Gui", "pedro")
FilaDePessoas.imprimir();
FilaDePessoas.entrar("kaua", "samuel");
FilaDePessoas.imprimir();
FilaDePessoas.proximo();
FilaDePessoas.imprimir();

const FilaDeNumeros = new Fila<number>(3 , 2); 
FilaDeNumeros.imprimir();
FilaDeNumeros.entrar(4, 5);
FilaDeNumeros.imprimir();
FilaDeNumeros.proximo();
FilaDeNumeros.imprimir();

//desafio do módulo
//desafio mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = { chave: C, valor: V}

class Mapa<C,V>{
  private itens: Array<Par<C, V>> = new Array<Par<C, V>>()

  constructor(){}


  colocar(item: Par<C, V>){
    let existe: boolean = false;
    this.itens.forEach(i =>{
      if(i.chave == item.chave){
        i.valor = item.valor;
        existe = true;
      }
    })

    if(!existe) this.itens.push(item);

  }

  obter(chave: C): Par<C, V> | null{
    const resultado = this.itens.filter(i => i.chave === chave);
    return (resultado) ? resultado[0] : null;
  }

  limpar(){
    this.itens = new Array<Par<C,V>>();
  }

  imprimir(){
    console.log(this.itens);
  }
}

 const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()