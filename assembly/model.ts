import {PersistentVector, u128, context} from "near-sdk-as";

//  
export class Product{
    // Atributtes
    name : String;
    description : String
    price : number;
    owner : String;
    // 
    constructor(name : String, description : String, price : number){
        this.name = name;
        this.description = description;
        this.price = price;
        this.owner = context.sender;
    }
}


// Clase Usuario
export class User{
    name : String;
    lastname : String;
    email : String;
    wallet : String;
   
    constructor(name : String,  lastname : String, email : String, wallet : String){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.wallet = wallet;
        
    }
}



export class Client { //Class Client
    //Attributtes
    name: String;
    phonenumber: String;
    address: String;

    // Method to load the values
    constructor(name : String,  phonenumber : String, address : String){
        this.name = name;
        this.phonenumber = phonenumber;
        this.address = address;
        
        
    }
}

// 
export class Payment { //Class Client
    //Attributtes
    amount: number;
    token: String;

    // Method to load the values
    constructor(amount : number, token: String){
        this.amount = amount;
        this.token = token;
    }
}

export class Store { //Class Client
    //Attributtes
    amount: number;
    description: String;

    // Method to load the values
    constructor(amount : number, descri: String){
        this.amount = amount;
        this.description = descri;
    }
}


export const saveProduct = new PersistentVector<Product>("s");
export const saveUser = new PersistentVector<User>("s");
export const saveClient = new PersistentVector<Client>("s");