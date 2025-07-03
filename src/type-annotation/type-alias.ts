type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  CorPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Amarelo' | 'Azul';
type CorCMTK = 'Ciano' | 'Magenta' | 'Preto';
type CorPreferida = CorRGB | CorCMTK;

const pessoa: Pessoa = {
  nome: 'daniel',
  idade: 18,
  salario: 200_000, //200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida) {
  return { ...pessoa, CorPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Magenta'));
console.log(pessoa);
