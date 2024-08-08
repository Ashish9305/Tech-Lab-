const { z } = require("zod"); // this is the convention to write 

//creating an object schema 

const signupSchema = z.object({
    username: z 
    .string({ required_error: "Name is required "})
    .trim()
    .min(3, {message: "Name must be at least of 3 chars. " })
    .max(255, {message: "name must not be more than 255 characters" }),

    email: z 
    .string({ required_error: "Email is required "})
    .trim()
    .email({ message: "invalid email address" })
    .min(3, {message: "EMAIL must be at least of 3 chars. " })
    .max(255, {message: "Email must not be more than 255 characters" }),

    phone: z 
    .string({ required_error: "phone is required "})
    .trim()
    .min(10, {message: "phone must be at least of 10 chars. " })
    .max(20, {message: "phone must not be more than 20 characters" }),

    password: z 
    .string({ required_error: "Password is required " })
    .min(7, {message: "Password must be at least of 7 chars. " })
    .max(255, {message: "Password must not be more than 255 characters" }),
});


module.exports = signupSchema;



// now we need one more middle ware to compare the user input data to this schema data , so for that we are creating middlewares folder 