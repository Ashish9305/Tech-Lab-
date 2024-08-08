require("dotenv").config(); // after writing this line i can use env in our application
//creating a server using expressjs 
const express = require("express");
const cors = require("cors");  // this is to be installed to add frontend with backend
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = 5500;

connectDB().then( () => {
    app.listen(PORT , () => {
        console.log(`server is running at port : ${PORT}`);
    });
});

// lets tackle cors and it should be done before app.use(express.json());

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());                // it means that now we can use json in our application 


// app.use (express.json()); : This line of code Express middleware that parses incoming request bodies with JSON payloads. It's important
// to place this before any routes that need to handle JSON payloads. It's important to place this 
// before any routes that need to handle JSON data in the request body. This 
// middleware is responsible for parsing JSON data from requests, and it should be applied at the beginning of your middleware stack to 
// ensure its;s available for all subsequent route handlers.

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix

app.use("/api/auth" , authRoute);
app.use("/api/form", contactRoute);


app.use(errorMiddleware);


// app.get("/" , (req , res ) => {
//     res.status(200).send("Welcome in my MERN stack project ");
// });

// app.get("/register" ,(req,res) => {
//     res.status(200).send("Welcome to registration page ");

// });

// listen is the method  


 






