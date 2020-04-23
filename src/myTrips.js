let db= firebase.firestore();

export const readerMyTrips = () => {
    let user3 = firebase.auth().currentUser;
    let  uid;
      if (user3 != null) {
        let uid = user3.uid;  
        var next = db.collection("post")
                        .orderBy("datepost", "desc")
                        .limit(25);
                        console.log(next)
        /*let userRef = db.collection('posts');
        console.log(userRef);
        let funt = userRef.where('uiduser', '==', uid).get()
        .then(snapshot => {
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        } 
        let mypost = document.querySelector('#list-myTrips')
            mypost.innerHTML = ''
        snapshot.forEach(doc => {
          console.log(doc.data().datepost)
        
          let div = `<div>  
                <p class="list-content">${doc.data().comentario}  ${doc.data().datepost}</p>
             </div>`

          let nodo = document.createElement('div')
  
          nodo.innerHTML = div
          mypost.appendChild(nodo)
        }); 
      })
      .catch(err => {
        //console.log('Error getting documents', err);
      });
      console.log(userRef);*/ 
    }
      
}