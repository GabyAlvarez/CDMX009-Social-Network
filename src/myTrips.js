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
           <br/>
          <img  id="${doc.id}" src='iconos/corazon.png' class='iconolike' /> ${doc.data().likes}
          </div>`
           let nodo = document.createElement('div')
               nodo.innerHTML = div
               mypost.appendChild(nodo);
              });
              let like = document.querySelectorAll(".iconolike");
              let actionLike = (e) => {
              let  likeRef = db.collection("posts").doc(e.target.id);
                    likeRef.update({
                          likes: firebase.firestore.FieldValue.increment(1)
                    });
                    readerMyTrips(); 
              };
              like.forEach((actionBtnLike) =>
                actionBtnLike.addEventListener("click", actionLike)
              );
          })
          .catch(err => {
            console.log(err); 
            //console.log('Error getting documents', err);
          });
       }
}

