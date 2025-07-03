//tuple
const dadosCliente: [number, string, string?, ...string[]] = [1, 'daniel'];
const dadosCliente1: readonly [number, string, string?, ...string[]] = [
  1,
  'daniel',
];

dadosCliente[0] = 100;
dadosCliente[1] = 'troca';
dadosCliente[4] = 'troca';

dadosCliente.pop();
//dadosCliente1.pop(); nn funciona

console.log(dadosCliente);
console.log(dadosCliente1);

// readonly
const array: readonly string[] = ['luiz', 'rocha'];
const array1: ReadonlyArray<string> = ['luiz', 'rocha'];

console.log(array);
console.log(array1);
