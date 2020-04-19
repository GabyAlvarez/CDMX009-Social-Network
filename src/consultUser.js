let dataBase= firebase.firestore();
  
  function consultarUsuarios(){
    dataBase.collection("users").get()
      .then(function(data) {
        data.forEach(function(user) {
            console.log(user.id);
            let detalleUser = user.data();
            console.log(detalleUser.name);
            console.log(detalleUser.lastName);
            console.log(detalleUser.email);
            console.log("****************")
        });
      }).catch(function()  {
        console.error("Error al consultar la BDD")
    });
  }
  
  function consultarUsuario(campo, value){
    dataBase.collection("users").where(campo, "==", value)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch(function(error) {
          console.log("Error al consultar por correo");
      });
  
  }
  
  consultarUsuarios();
  //consultarUsuario("email","gabyalvarzb@gmail.com");
  //consultarUsuario("name","gabs");