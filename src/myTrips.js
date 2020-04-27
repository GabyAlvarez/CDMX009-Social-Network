let db= firebase.firestore();

export const readerMyTrips = () => {
  let user3 = firebase.auth().currentUser;
  if (user3 != null) {
    let uid = user3.uid;  
    let postRef = db.collection('posts');
        postRef.where('uid', '==', uid).orderBy('date', 'desc').get()
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
