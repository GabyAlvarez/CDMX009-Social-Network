import Post from "./Post.js";

function registerNewPost(){
    let viewPost=`<div id="formNewUser" class="formNewUser">
      <h2> Registrate </h2>
      <br>
      <input type="text" id="getName" class="input">
      <input type="text" id="newPost" class="newPost" placeholder="¿Cuantanos cual ha sido tu nuevo viaje?">
      <input type="text" id="lastName" class="input" placeholder="Lastname" maxlength="30">
    </div>`
    root.innerHTML = viewPost
    
    let btnSend = document.getElementById("send");
    btnSend.addEventListener("click",send,false);
  } 

