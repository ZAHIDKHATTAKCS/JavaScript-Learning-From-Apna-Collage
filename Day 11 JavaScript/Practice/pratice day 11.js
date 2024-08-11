// Q1 You are creating a website for your college. Create a class User with 2 properties, name & email. it also has a method called viewData() that allows user to view website data.

let DATA = "secret information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data  = " , DATA);
    }
}


let student1 = new User("zahid","abc@gmail.com",);
let student2 = new User("khattak","khattak@gmail.com",);
let student3 = new User("sahab","sahab@gmail.com",);

// Q2 Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit Website Data.

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
        editData(){
            DATA = "some new additions";
        }
}

let admin1 = new Admin("admin","dean@collage.com");


