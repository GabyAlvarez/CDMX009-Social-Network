let db= firebase.firestore();
let postRef = db.collection('posts');
let privacy = "public";
   
//let postsRef = db.collection('posts').orderBy('privacy', 'asc');
 
export const postGeneral = () => {
  postRef.where('privacy', '==', privacy).orderBy('date', 'desc').get()
  .then(snapshot => {
  if (snapshot.empty) {
     console.log('No matching documents.');
      return; 
  }
  let mypost = document.querySelector('#list-post')
  mypost.innerHTML = ''
  snapshot.forEach(doc => {
    //let id = doc.data().uid; 
    //console.log(id); 
    let div = `<div class="list-content">  
      <p>${doc.data().text}</p>
      <img class='imgListPost' src='${doc.data().imageUrl}' />
      <br/>
      <img class='iconolike' src='iconos/corazon.png' id='like' /> ${doc.data().likes}
      </div>`;
      
      let nodo = document.createElement('div')
      nodo.innerHTML = div;
      mypost.appendChild(nodo);
      let iconolike = document.querySelector("#like");
            iconolike.addEventListener("click", () =>{ 
            //console.log("Hola")
            likes()
          });
      }); 
    })
    .catch(err => {
      console.log(err); 
      //console.log('Error getting documents', err);
    });
    // console.log(userRef);
 }
let uidpost = 1; 
 function likes(uidpost){

  //postRef.where('uidpost', '==', ).get()
    console.log("hola")
    console.log(id); 
 }
 function contar(conteo){
     console.log(conteo); 
 }
