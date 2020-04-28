let db= firebase.firestore();
let postRef = db.collection('posts');
let privacy = "public";
   
export const postGeneral = () => {
  postRef.where('privacy', '==', privacy).orderBy('date', 'desc').get()
  .then(snapshot => {
  if (snapshot.empty) {
     console.log('No matching documents.');
      return; 
  }
  let mypost = document.querySelector('#list-post')
      mypost.innerHTML = ''; 
      snapshot.forEach(doc => {  
    let div = `<div class="list-content">  
      <p>${doc.data().text}</p>
      <img class='imgListPost' src='${doc.data().imageUrl}' />
      <br/>
      <img class='iconolike' src='iconos/corazon.png' id="likes" /> ${doc.data().likes}
      </div>`;
      let nodo = document.createElement('div')
           nodo.innerHTML = div;
          mypost.appendChild(nodo);
      });
     /* let iconolikes = document.querySelector("#likes");
          iconoslikes.addEventListener("click", () =>{ 
                console.log(doc.data().uiduser); 
              });*/
    })
    .catch(err => {
      console.log(err); 
      //console.log('Error getting documents', err);
    });
 }
 
 function eliminar(e){
  console.log(e); 
  // 
/*postRef.onSnapshot(snap => {

  snap.forEach(doc => {
    console.log(doc.data()); 
    console.log(doc.data().iud);
  })
*/
}
