const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // important to get this so never forget to do like this its important
const jwt = require("jsonwebtoken");  

//creating instance of a mongoose schema 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean ,
        default: false,
    },
});


// secure the password with the bcrypt....
// pre is the method and a middleware and we are passing 'save' method so that ki databse me save hone ke pahle ye method run hoga
// or uske baad jakar database me ye data save hoga 

userSchema.pre('save',async function(next){
    // console.log(" pre method ",this); // here i have used this to check in the console that what is this and pata laga ki ye jo bhi user data input de rahe wo hai 

    const user = this;
    if(!user.isModified() ){
        next();  // next matlab hai next step  par chale jao jo ki yaha par input data ko save karne ko hai
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;

    } catch (error) {
        next(error);

    }
});

// compare the password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}



// we have to install json web token on our terminal with the command - npm i jsonwebtoken
// json web token
// Tokens , such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user
// details, instead, they are issued by the server during the authentication process and then stored on the
// client-side (eg, in cookies or local storage ) for later use,
// What is JWT?

// JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

// JWTs are often used for authentication and authorization in web applications.

// Authentication: Verifying the identity of a user or client.

// Authorization: Determining what actions a user or client is allowed to perform.

// Components of a JWT:

// Header: Contains metadata about the token, such as the type of token and the signing algorithm being used.

// Payload: Contains claims or statements about an entity (typically, the user) and additional data. Common claims include user ID, username, and expiration time.

// Signature: To verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way, a signature is included.

userSchema.methods.generateToken =  function() { 
    try{
        return jwt.sign({ //payloads :-
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,

        },
        process.env.JWT_SECRET_KEY, 
        {
            expiresIn: "30d",
        }
        );

    } catch (error) {

    }
} ; //now we can acess this anywhere in controller
// here methods here is itself a method through which we can create a multiple methods or functions
//  and we can use that anywhere

 


const User = new mongoose.model("User", userSchema);   //define the model or the collection name 

module.exports = User;
