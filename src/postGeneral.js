let db= firebase.firestore();

export const postGeneral = () => {
    let postsRef = db.collection('posts');
        postsRef.onSnapshot(snap => {
    let content = document.querySelector('#list-general')
        content.innerHTML = ''
        snap.forEach(doc => {
            let div = `<div>
                 <p class="list-content">${doc.data().comentario}</p>
            </div>`
            let nodo = document.createElement('div')
                nodo.innerHTML = div
            content.appendChild(nodo)
        })
        }); 
}