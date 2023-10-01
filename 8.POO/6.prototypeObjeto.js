/* 
        Assim como uma pessoa herda o gene de seus parentes, um objeto herda seu
         prototype diretamente da função construtora que o criou. 
*/


function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Altere apenas o código abaixo desta linha
  
  console.log(Dog.prototype.isPrototypeOf(beagle))