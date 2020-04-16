import { send } from './example.js';

// main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')

// loginView
function renderLogin(){
  let loginView = `<div>
  <h2> Iniciar sesión</h2>
  <input type="email" id="email" placeholder="Email"/>
  <input type="password" id="password" placeholder="Password"/>
  <button id="send" >Enviar</button>
</div>`
  root.innerHTML = loginView

  let btnSend = document.getElementById("send");
  btnSend.addEventListener("click",send,false);
}

function registerUser(){
  let registerView=`<form action="" id="formNewUser" class="formNewUser">
    <h2> Registrate </h2>
    <br>
    <input type="text" id="name" class="input" placeholder="Name" maxlength="20">
    <input type="text" id="lastName" class="input" placeholder="Lastname" maxlength="30">
    <input type="email" id="email" class="input" placeholder="Email">
    <input type="password" id="password" class="input" placeholder="Password">
    <input type="password" id="password2" class="input" placeholder="Confirmar password">
    <input type="button" id="send" class="button" value="Registrar">
  </form>`
  root.innerHTML = registerView
  
  let btnSend = document.getElementById("send");
  btnSend.addEventListener("click",send,false);
} 

// first view
function renderHome(){
  let homeView = `<div>
  <h2> tripLife </h2>
</div>`
  root.innerHTML = homeView
}

// router
function router(route){
  console.log(route)
  switch(route){
    case '/register':
      registerUser()
      break;
    case '/login':
      renderLogin()
      break;
    default:
      renderHome()
      break;
         }
}

// btn listener
btns.forEach(btn=>btn.onclick=e=>router(e.target.id))

// init
router()
