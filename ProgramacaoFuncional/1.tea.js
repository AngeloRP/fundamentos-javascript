// Função que retorna uma string representando uma xícara de chá verde
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, a função
a seguir retorna um array de strings (cada uma representa uma xícara de um tipo específico de chá).
*/
const getTea = (prepareTea,numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Altere apenas o código abaixo desta linha
const teaGreenTeamFCC = getTea(prepareGreenTea,4);
const teaBlackTeamFCC = getTea(prepareBlackTea,4);

console.log(
  teaGreenTeamFCC,
  teaBlackTeamFCC
  )
// Altere apenas o código acima desta linha