// yaha par source code se paste karna hai from lec 15 qki chal nahi raha website abhi 

const { Schema } = require("zod");

const validate = (Schema) => async (req, res, next) => { // here schema is the signupSchema and validate is working as a middleware

    try{
        const parseBody = await Schema.parseAsync(req.body); // this line tell that input user data is matching or not with the schema?
        req.body = parseBody;
        next();
        
    } catch (err) {
        const status = 422 ;
        const message = "Fill the input properly ";
        const extraDetails = err.errors[0].message;


        const error = {
            status ,
            message,
            extraDetails,
        };



        console.log(error);
        // res.status(400).json({ msg: message });
        next(error);
    }
};

module.exports = validate; 