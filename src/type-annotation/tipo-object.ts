const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // permite criar outros
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//objetoA.chaveD = 'nova chave';  -- não pode
objetoA.chaveC = 'teste';
objetoA.chaveE = 'teste';
console.log(objetoA.chaveE);
