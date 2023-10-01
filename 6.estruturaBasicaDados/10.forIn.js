const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

  function usersOnline (lista) {
    let qtdUsersOnline = 0;
    for (const user in lista){
        if (lista[user].online === true) {
            qtdUsersOnline++;
        }
    }
    return ` Numero de usuarios online: ${qtdUsersOnline}`;
  }
  
console.log(usersOnline(users))
