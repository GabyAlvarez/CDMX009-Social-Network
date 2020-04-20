/*export default class User {
    
    name
    lastName
    email
    password

    constructor(name,lastName,email,password){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}*/
 
export default class User {
    
    name
    lastName
    email
    photo
    description
    date
    uid    

    constructor(name,lastName,email,photo,description,date,uid){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.photo = photo;
        this.description = description;
        this.date = date;
        this.uid = uid;
    }
}