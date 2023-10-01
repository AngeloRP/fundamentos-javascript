const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  
  function criaLista (arr) {
    const arrayItensFalhos = [];
    for (let i = 0; i < arr.length; i++) {
         console.log(`loop ${[i]} e o conteudo  ${arr[i]}`)
         arrayItensFalhos.push( `<li class="text-warning">${arr[i]} </li>`)
         
    }


    return arrayItensFalhos;   
  }
  
  
  const itemsFalhados = criaLista(result.failure);
console.log(itemsFalhados);