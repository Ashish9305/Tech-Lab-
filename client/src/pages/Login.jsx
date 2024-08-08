import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5500/api/auth/login";

export const Login = () => {

    const [user, setUser] = useState({
        email: "" ,
        password: "",
    });

    const navigate = useNavigate();

  // let handle the input field value
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,  //purane data ka bhi dhyan rakhna hoga 
            [name]: value ,   // dynamic storing value 
        });
    };

    const handleSubmit = async (e) => {         // age jakar handleSubmit par hi code likhenge backend ka 
        e.preventDefault();
        console.log(user);

        try{
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user), 
            });

            console.log("login form " , response);

            if(response.ok){
                alert("Login successful");
                setUser({ email: "", password: "" });
                navigate("/")
            } else {
                alert("invalid credentials");
                console.log("Invalid Credentials ") ;
            }

        } catch (error) {
            console.log(error);
        }
    };


    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/login.png" alt="lets fill the login form  "
                             width="500"
                             height="500" 
                             />
                        </div>

                        {/* // let tackle registration form  */}

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login from </h1>
                            <br />

                              <form onSubmit={handleSubmit}>  

                                    <div>
                                        <label htmlFor="email">email </label>
                                        <input 
                                        type="emil" 
                                        name="email"
                                        placeholder="email" 
                                        id="email" 
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                        /> 
                                    </div> 

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input 
                                        type="password" 
                                        name="password"
                                        placeholder="password" 
                                        id="password" 
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                        /> 
                                    </div> 

                                    <br />
                                    <button type="submit" className="btn btn-submit ">
                                        Register Now
                                    </button>
                              </form>  


                        </div>


                    </div>
                </div>
            </main>
        </section>
    </>

};  