const mongoose = require("mongoose");

// const URI ="mongodb://127.0.0.1:27017/mern_admin";  // i got this uri from the writing mongosh in the terminal and copying from there
// mongoose.connect(URL); 

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log("connection sucessfull to databse");

    } catch(error) {
        console.error("database connection failed ");
        process.exit(0);
    }

};

module.exports = connectDB;

