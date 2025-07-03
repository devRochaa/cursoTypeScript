enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO = 30,
}

//vai unir os 2

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
}

//console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO);
escolhaCor(201);

export default 1;
