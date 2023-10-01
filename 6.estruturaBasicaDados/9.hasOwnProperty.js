let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  function verificaTodosNomes(objeto) {
    if (objeto.hasOwnProperty('Alan') &&
        objeto.hasOwnProperty('Jeff') &&
        objeto.hasOwnProperty('Sarah') &&
        objeto.hasOwnProperty('Ryan')){
        return true;
    } else {
        return false;
    }
  }
  console.log(verificaTodosNomes(users));