let db= firebase.firestore();

export const readerMyTrips = () => {
  let currentUser = firebase.auth().currentUser;
  if (currentUser != null) {
    let uid = currentUser.uid;  
    let postRef = db.collection('posts');
        postRef.where('uiduser', '==', uid).orderBy('date', 'desc').get()
        .then(snapshot => {
        if (snapshot.empty) {
         console.log('No matching documents.');
         return; 
        } 
       let mypost = document.querySelector('#list-post')
           mypost.innerHTML = ''
           snapshot.forEach(doc => {
           let div = `<div class="list-content">  
           <p>${doc.data().text}</p>
           <img class='imgListPost' src='${doc.data().imageUrl}' id="iconoLike">
           </div>`
           let nodo = document.createElement('div')
               nodo.innerHTML = div
               mypost.appendChild(nodo)
          let iconolike = document.querySelector("#iconoLike");
              iconolike.addEventListener("click", () =>{ 
              console.log(like);  
          }); 
      }); 
    })
    .catch(err => {
      console.log(err); 
      //console.log('Error getting documents', err);
    });
    // console.log(userRef);
  }
}
