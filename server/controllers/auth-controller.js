const User = require("../models/user-model");
const bcrypt = require("bcryptjs");        //npm i bcrypt in the terminal to install this package

// *----------------------
//* Controllers
// *----------------------

//? In an Express.js application, a "controller" refers to a part of your code that is responsible 
// for handling the application's logic. Controllers are typically used to process incoming requests,
//  interact with models (data sources), and send responses back to clients. 
// They help organize your application by separating concerns and following 
// the MVC (Model-View-Controller) design pattern.

// *-------------------
// Home Logic
// *-------------------
const home = async (req ,res ) => {
    try{
        res
    .status(200)    //res.status(200) is expressing that the HTTP response status should be set to 200 
    .json({ msg: "welcome to our home page" });

    }catch (error) {
        res.status(500).json("internal server error ");
    }
}

// *-------------------------------
//* User Registration Logic 📝
// *-------------------------------
// 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
// 2. Check Email Existence: 📋 Check if the email is already registered.
// 3. Hash Password: 🔒 Securely hash the password.
// 4. Create User: 📝 Create a new user with hashed password.
// 5. Save to DB: 💾 Save user data to the database.
// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

const register = async (req, res) => {
    try{
        console.log(req.body);      //ashish kumar jaiswal is bhakt of mata ji 
        const {username , email, phone, password} = req.body;

        const userExist = await User.findOne({ email: email });

        if(userExist){
            return res.status(400).json({ msg: "email already exists "});
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);


        const userCreated = await User.create({ username ,
             email,
             phone,
             password,
             //password: hash_password
             });


        res.status(201).json({ 
        //  msg: userCreated,      if used this then data will also be visible checked on postman
         msg: "registration sucessfull",
         token: await userCreated.generateToken(),
         userId: userCreated._id.toString(), 
         
        });
        
    } catch(error) {
        res.status(500).json(" internal server error"); 

    }
}

// In most cases , converting _id to a string is a good practice because it ensures consistency
// and compactibility across different JWT libraries and systems. It also aligns with the
// expectation that claims in a JWT are represented as strings. 


// *-------------------------------
//* User Login Logic 📝
// *-------------------------------


const login = async (req,res) => {
    try {
        const {email , password } = req.body ;

        const userExist = await User.findOne({ email });
        console.log(userExist); // we will get all details of the user not only email but all data

        if(!userExist) { // exist nahi karta hai to :-
            return res.status(400).json({ message: " Invalid Credentials "});//  we can also write that user doesnot exist but why to give hint to hackers for our actual problems

        }

        // agar exist karta hai to :-
        // we are writing it here directly but we can build a function on the user-modal also which can bcrypt our password 
        // const user = await bcrypt.compare(password,userExist.password ); // compare is the method  
        const user = await userExist.comparePassword(password);


        if (user) {
            res.status(200).json({            //status(201) - it is used when we are creating new but here  bas hamlog login kara
                msg: "Login Sucessful" ,
                token : await userExist.generateToken() ,
                userId: userExist._id.toString() ,
            });
        } else {
            res.status(401).json({message: "Invalid email or password "});  // here correct reason is invalid password but to hide from the hacker dont let them know the actual reason
            
        }

    } catch (error) {
        // res.status(500).json("internal server error ");  now we will use next() because of the error middleware so that each error will be directly forwarded to the client from there 
        next(error);
    }
};


module.exports =  { home ,register, login } ;