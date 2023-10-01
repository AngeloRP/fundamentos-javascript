/* Combinar arrays com o operador spread
Outra grande vantagem do operador spread 
é a capacidade de combinar arrays, ou de inserir 
todos os elementos de um array em outro, em qualquer índice.
 Com sintaxe mais tradicional, podemos concatenar arrays,
  mas isso só nos permite combinar arrays no final de um 
  e no início de outro. A sintaxe do spread torna a seguinte 
  operação extremamente simples: */

  function uneArrays () {
    let segment = ['one', 'two'];
    let fragment = [...segment, 'three', 'four', 'five'];
    return fragment;
  }

  console.log(uneArrays())