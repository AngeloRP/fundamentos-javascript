let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };


  function mostraUsers (objeto) {
    return Object.keys(objeto);
  }

  console.log(mostraUsers(users));

//   Object.keys()  retorna um array com as propriedades do obj