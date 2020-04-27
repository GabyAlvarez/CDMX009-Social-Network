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
    let idpost = doc.data().uiduser;  
    let div = `<div class="list-content">  
      <p>${doc.data().text}</p>
      <img class='imgListPost' src='${doc.data().imageUrl}' />
      <br/>
      <button value='${idpost}' id='idpost'/>Like</button>
      <img class='iconolike' src='iconos/corazon.png' /> ${doc.data().likes}
      </div>`;
      
      let nodo = document.createElement('div')
      nodo.innerHTML = div;
      mypost.appendChild(nodo);
      let iconolike = document.querySelector("#idpost");
            iconolike.addEventListener("click", (e) =>{ 
            likes(e); 
          });
      }); 
    })
    .catch(err => {
      console.log(err); 
      //console.log('Error getting documents', err);
    });
 }
function likes(e){
  let word = e.target.value;
  console.log(word); 
  // 
/*postRef.onSnapshot(snap => {

  snap.forEach(doc => {
    console.log(doc.data()); 
    console.log(doc.data().iud);
  })
*/
}
