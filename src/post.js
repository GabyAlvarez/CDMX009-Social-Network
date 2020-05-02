export default class Post {
    
    text
    imageLink
    imageId
    privacy
    //location
    date
    userName
    uid
    photoUser

    constructor(text,imageLink,imageId,privacy,date,userName,uid, photoUser){
        this.text = text;
        this.imageLink = imageLink;
        this.imageId = imageId;
        this.privacy = privacy;
        //this.location = location;
        this.date = date;
        this.userName = userName; 
        this.uid = uid;
        this.photoUser = photoUser; 
    }
}