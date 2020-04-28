import { closeSesion } from './cerrarSesion.js'; 
import { readerMyTrips } from './myTrips.js';
import { postGeneral } from './postGeneral.js';
import { renderEditProfeli } from './editProfeli.js'; 
//import { profil} from './createPost.js'; 
let db= firebase.firestore();
let userRef = db.collection('users');
let main = document.querySelector('#main');
        
export const renderContent = () => {
  let uiduser = firebase.auth().currentUser.uid;
    if (uiduser != null) {
    userRef.where('uid', '==', uiduser).get()
      .then(snapshot => {
      if (snapshot.empty) {
          console.log('No matching documents.');
          return;
      }
      snapshot.forEach(doc => {
        let imguser = doc.data().photo;
        /*if(imguser == ''){
          let photouser = '<img src="iconos/corazon.png"/>'; 
        }else{
          let photouser = imguser; 
        }*/
        let profilView = `
        
        <header>
            <div class="divisor">  
              <div class="positiononeheader">
                <img class="logo" src="images/logo.png" alt="TripLife">
              </div>
              <div class="positiontwoheader">
                <div class="menu-togle" id="menu">  
                <div class="hamburger"></div>
                </div>
                <nav class="site-nav" id="site-nav">
                  <ul>
                    <li> <a href="#" id="index"> Inicio </a></li>
                    <li> <a href="#" id="editProfile"> Perfil </a></li>
                    <li> <a href="#" id="logout"> Cerrar Sesión </a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <div class="divisor">
            <div class="position-photo">
              
              <img class="photo" src="${doc.data().photo}" /> 
            </div>
            <div class="position-profeli">
              <p class="name">${doc.data().name}  ${doc.data().lastName} </p>
              <p class="description">${doc.data().description}</p>
            </div>
          </div>
          <div class="divisor">
            <div class="mitad">
              <input type="button" id="MyTrips" class="button" value="My Trips">
            </div>
            <div  class="mitad">
              <input type="button" id="TripBoad" class="button" value="Trip Board">
            </div>
          </div>
          <div class="divisor">
            <div class="position-one-thought">
              <img class="thought-photo" src="${doc.data().photo}" />
            </div class="">
            <div class="position-two-thought">
              <input type="text" id="thought" class='thought-input' placeholder="¿Donde te encuentras?"/>
            </div>
          </div>
          <div id="list-post"></div>`;
          main.innerHTML = profilView;
          postGeneral();
          let logout = document.querySelector("#logout");
              logout.addEventListener("click", closeSesion);
          let editProfile = document.querySelector("#editProfile");
              editProfile.addEventListener("click", () =>{ 
                renderEditProfeli(); 
              });
          let MyTrips = document.querySelector("#MyTrips");
              MyTrips.addEventListener("click", () =>{ 
                readerMyTrips();
              });
          let tripBoard = document.querySelector("#TripBoad");
              tripBoard.addEventListener("click", () =>{ 
                postGeneral();
              });
          let thought = document.querySelector("#thought");
              thought.addEventListener("click", () =>{ 
                //profil(); 
                console.log("hola"); 
              });
         let menu = document.querySelector("#menu");
             menu.addEventListener("click", () =>{
             let siteNav = document.querySelector("#site-nav");
                 siteNav.classList.toggle("site-nav-open");
               });
            }); 
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      }
}

