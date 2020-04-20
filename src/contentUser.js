import {router} from './index';

const closeSesion = () =>{
    firebase.auth().signOut().then(function(){
      console.log('Cerrando sesión');
    }).catch(function(error){
      console.log(error);
    })
  }

let db= firebase.firestore();
let userRef = db.collection('users'); 

export const renderContentUser = () => {
    let mainUser = firebase.auth().currentUser;
    let  uid;
    if (mainUser != null) {
        let uid = mainUser.uid;  
        console.log(uid); 
        let citiesRef = db.collection('users');
        let query = citiesRef.where('uid', '==', uid).get()
        .then(snapshot => {
            if (snapshot.empty) {
            console.log('No matching documents.');
            return;
            }
            snapshot.forEach(doc => {
                console.log(doc.data().nombre)
                console.log(doc.data().email)
                console.log(doc.data().photo)
                //console.log(doc.id, '=>', doc.data());
                let main = document.querySelector('#main');
                let profilView = `
                <header>
                  <div class="divisor">
                    <div class="positionone">
                      <img class="logo" src="images/logo.png" alt="TripLife">
                    </div>
                    <div class="positiontwo">
                      Menu
                    </div>
                    </div>
                </header>
                <div class="divir">
                <div class="positionone">
                <img class="photo" src="${doc.data().photo}" /> 
                
                </div>
                <div class="positiontwo">
                  <p>Welcome ${doc.data().name}</p>
                    <p> Congratulations!! This is your personal account</p>
                    <input id="logout" type="button" value="Log out">
                </div>
                </div>
                  `
                main.innerHTML = profilView;

                let logout = document.querySelector("#logout");
                logout.addEventListener("click", closeSesion);
                

            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });

    }
    
}