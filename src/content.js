import {router} from './index.js';
import {renderProfeli} from './profeli.js';
const closeSesion = () =>{
    firebase.auth().signOut().then(function(){
      console.log('Cerrando sesión');
  
    }).catch(function(error){
      console.log(error);
    })
  }
let db= firebase.firestore();
//let userRef = db.collection('users'); 

export const renderContent = () => {
  let user3 = firebase.auth().currentUser;
  let  uid;
    if (user3 != null) {
      let uid = user3.uid;  
    //console.log(uid); 
    let citiesRef = db.collection('users');
    let funt = citiesRef.where('uid', '==', uid).get()
      .then(snapshot => {
      if (snapshot.empty) {
          console.log('No matching documents.');
          return;
      } 
        snapshot.forEach(doc => {
        let main = document.querySelector('#main');
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
                <nav class="site-nave" id="site-nave">
                  <ul>
                    <li> <a href="#" id="index"> Inicio </a></li>
                    <li> <a href="#" id="profel"> Perfil </a></li>
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
              <input type="button" id="TripBoadr" class="button" value="Trip Board">
            </div>
          </div>
          <div class="divisor">
            <div class="position-one-thought">
              <img class="thought-photo" src="${doc.data().photo}" />
            </div class="">
            <div class="position-two-thought">
              <input type="text" id="thought" class="input" placeholder="¿Donde te encuentras?"/>
            </div>
          </div>`
          main.innerHTML = profilView;
          let logout = document.querySelector("#logout");
          logout.addEventListener("click", closeSesion);
          let profeli = document.querySelector("#profel");
          profeli.addEventListener("click", renderProfeli);
          
          let menu = document.querySelector("#menu");
          menu.addEventListener("click", () =>{
          let siteNav = document.querySelector("#site-nave");
          siteNav.classList.toggle("site-nave-open");
        });
      }); 
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }
}
