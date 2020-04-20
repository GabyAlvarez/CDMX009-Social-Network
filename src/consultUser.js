import User from "./user.js";
import {router} from './index.js';

let dataBase= firebase.firestore();
let perfilUser= {};


function consultarUsuario(campo, value){
  let informationUser = document.querySelector('#main');
    dataBase.collection("users").where(campo, "==", value)
      .get()
      .then(function(querySnapshot) {
        informationUser.innerHTML = "";
          querySnapshot.forEach(function(doc) {
              console.log(doc.uid, " => ", doc.data());
          
              let detalleUser = user.data();
              console.log(detalleUser.name);
              console.log(detalleUser.lastName);
              console.log(detalleUser.email);
              console.log(detalleUser.photo); 
              console.log("****************")

              /*informationUser.innerHTML += `<div id="informationUser" class="">
              <figure>
                <img src="" class="" alt="${user}">
              </figure>
              <p id="" class="">${doc.id}</p>
              <input type="text" id="" class="" placeholder="Your description">${doc.data.name}
              <input type="button" id="edit" class="button" value="Edit">
            </div>`
            console.log(si lee el campo de user, pero integra datos?)
          });*/
      })
      .catch(function(error) {
          console.log("Error al consultar por correo");
      });

      //main.innerHTML = informationUser;
  }
  

  //consultarUsuario("email","gabyalvarzb@gmail.com");
consultarUsuario("name","gaby")
/********************************************************** */

const userInformation = () => {
  let main = document.querySelector('#main');
  let informationView=`<div id="informationUser" class="">
  <figure>
    <img src="" class="" alt="">
  </figure>
  <p id="" class="">${user}</p>
  <input type="text" id="" class="" placeholder="Your description">
  <input type="button" id="edit" class="button" value="Edit">
</div>`

main.innerHTML = informationView

//let btnEditar = document.getElementById("edit");

//btnEdit.addEventListener("click",send,false);
}

userInformation();