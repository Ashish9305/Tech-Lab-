// *----------------------
//* express.Router
// *----------------------

//? In Express.js, express.Router() is a mini Express application without all the server configurations but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize your routes and middleware to keep your code organized and maintainable.
//* <https://expressjs.com/en/guide/routing.html>
//? Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.


const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller"); // or // const {home ,register} = require("../controllers/auth-controller")
const signupSchema = require("../validators/auth-validator");
const validate = require('../middlewares/validate-middleware');
// router.get("/", (req, res) => {
//     res.status(200).send("welcome to world best mern site by ASHISH kumar JAISWAL using router");
// } );

//or 

// router.route("/").get((req,res) => {
//     res
//     .status(200)    //res.status(200) is expressing that the HTTP response status should be set to 200 
//     .send("welcome to world best mern site by ASHISH KUMAR JAISWAL");
// });                 // better use this bcz it will be easy 

router.route("/").get(authcontrollers.home);        //when we are writing home - code in auth controller

//  router.route("/register").get((req,res) => {
//     res.status(200).send("welcome to resgistration page ");
    
//  });

router.route("/register")
.post( validate(signupSchema) , authcontrollers.register ); 
router.route("/login").post(authcontrollers.login);

// post method is used to add all the details filled by user in registration or in login page 
// so if you want to add something you can use post method 


module.exports = router; 

// we have to export all time 


//HTTP method and meaning 

// method - meaning 
// GET - read data
// POST - insert data 
// PUT or PATCH - update data , or insert if a new id 
// DELETE - delete data 