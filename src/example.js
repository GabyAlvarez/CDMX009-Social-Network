 import User from "./User.js";

 export const firebaseConfig = {
    apiKey: "AIzaSyAxz1HP9cPkI4VO2gXoj4GVnFxZK2kKUVw",
    authDomain: "desarrolloweb-44294.firebaseapp.com",
    databaseURL: "https://desarrolloweb-44294.firebaseio.com",
    projectId: "desarrolloweb-44294",
    storageBucket: "desarrolloweb-44294.appspot.com",
    messagingSenderId: "236290236182",
    appId: "1:236290236182:web:038028ae2f66e945743a37"
  };

firebase.initializeApp(firebaseConfig);
let dataBase= firebase.firestore();


export function send() {
  let msgError = null;

  let saveName= document.querySelector('#name').value;
  let saveLastName= document.querySelector('#lastName').value;
  let saveEmail= document.querySelector('#email').value;
  let savePassword= document.querySelector('#password').value;
  let savePassword2= document.querySelector('#password2').value;

  // Validar datos
  if(saveName == null || saveName == '' || saveName == undefined ){
    msgError ="Completa el campo name";
  }else if(saveLastName == null || saveLastName == '' || saveLastName == undefined){
    msgError ="Completa el campo Lastname";
  }else if(savePassword == null || savePassword == '' || savePassword == undefined){
    msgError ="Completa el campo password";
  }else if(savePassword2 == null || savePassword2 == '' || savePassword2 == undefined){
    msgError ="Password no coicide";
  }

  if(msgError == null) {
    let usuario = new User(saveName,saveLastName,saveEmail,savePassword);

    registerAuthentication(usuario);
    // Enviar correo de confirmacion
  } else{
    alert(msgError);
  }
}

function registerAuthentication(usuario) {
  firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password)
    .catch(function(error) {
      // let errorCode = error.code;
      let errorMessage = error.message;
      alert("Error: " + errorMessage);
    }).then(function(user){
      registerUser(usuario);
  });
} 

function registerUser (usuario) {
  dataBase.collection("users").add({
    "name": usuario.name,
    "lastName": usuario.lastName,
    "email": usuario.email,
    "password": usuario.password
  })
  .then((data) => {
    sentEmailConfirmation(usuario.email);
    alert("Usuario registrado confirme su cuenta");
  }).catch((error)=> {
    alert("Usuario NO  registrado correctamente: " + error);
  });
} 

function sentEmailConfirmation() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  .then(function() {
    // window.localStorage.setItem('emailForSignIn', email);
  })
  .catch(function(error) {
    alert("Usuario NO  registrado correctamente: " + error);
  });
}

function outlogin() {
  firebase.auth().signOut().then(function(){
      console.log("Deslogiado");
  }).catch(function(error){
      console.log("Error"+error);
  })
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    console.log(user);
    if(!user.emailVerified){
      // outlogin();
    }

  } else {

  }
});