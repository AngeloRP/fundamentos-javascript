let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  function checarEstoque (item) {
    return `o item ( ${item} ) custa: ${foods[item]} reais.`
  }

  console.log(checarEstoque('apples'));

  /* 
  caso quisesemos deletar alguma propriedade usamos o 
  delete, desta forma

        delete.foods.apples;
  */