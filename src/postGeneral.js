let db= firebase.firestore();

export const postGeneral = () => {
    let postsRef = db.collection('posts');
        postsRef.onSnapshot(snap => {
    let content = document.querySelector('#list-general')
        content.innerHTML = ''
        snap.forEach(doc => {
            let div = `<div class="list-content">
                 <p> ${doc.data().comentario}</p>
                <br/>
                <img src="iconos/corazon.png" id="like">
                 </div>`
            let nodo = document.createElement('div')
                nodo.innerHTML = div
            content.appendChild(nodo)
        })
        }); 
}