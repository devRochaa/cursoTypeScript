function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Daniel',
  sobrenome: 'rocha',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('teste', 'teste1');
pessoa.exibirNome();
export { pessoa };
