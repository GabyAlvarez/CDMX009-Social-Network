let db= firebase.firestore();

export const readerMyTrips = () => {
    let user3 = firebase.auth().currentUser;
    let  uid;
      if (user3 != null) {
        let uid = user3.uid;  
        console.log(uid); 
      let userRef = db.collection('posts');
      let funt = userRef.where('uiduser', '==', uid).get()
        .then(snapshot => {
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        } 
        let mypost = document.querySelector('#list-myTrips')
            mypost.innerHTML = ''
        snapshot.forEach(doc => {
            let div = `<div>  
                <p class="list-content">${doc.data().comentario}</p>
             </div>`

          let nodo = document.createElement('div')
  
          nodo.innerHTML = div
  
          mypost.appendChild(nodo)
              /* let myTripsView = `
            <p>${doc.data().comentario}</p>  
          `
            list.innerHTML = myTripsView;
            
        
        /*const myThough = document.createElement('div');
        myThough.style.width = "60%"; 
        myThough.style.left= "100px"; 
        const myPara1 = document.createElement('p');
        myPara1.textContent = `${doc.data().comentario}`;
        myThough.appendChild(myPara1);
        mydiv.appendChild(myThough);
        list.appendChild(mydiv);*/
    }); 
      })
      .catch(err => {
        //console.log('Error getting documents', err);
      });
      console.log(userRef); 
    }
      
}