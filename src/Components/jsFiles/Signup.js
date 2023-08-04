import React from "react";
import { Link } from "react-router-dom";

function Signup () {  
  return (
    <div className="signupPageStyle">

    <div class="outer-box">
        <div class="inner-box">
            <header singup-header>
                <h1>Signup</h1>
                <p>it just takes 30 seconds</p>
            </header>

            <main class="signup-body">
                <form action="#">
                    <p>
                        <label for="fullname">Full Name</label>
                        <input type="text" id="fullname" placeholder="Al Amin" required/>
                    </p>

                    <p>
                        <label for="eamil">Your Email</label>
                        <input type="email" id="email" placeholder="abc@eamil.com" required/>
                    </p>

                    <p>
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="at least 8 character" required/>
                    </p>
                    <p>
                        <input type="submit" id="submit" value="Create Account"/>
                    </p>
                </form>
            </main>

            <footer class="signup-footer">
                <p>Already have an Accoutn? </p><Link to="/Login">LogIn</Link> 
            </footer>
        </div>
        <div class="circle c1"></div>
        <div class="circle c2"></div>
    </div>



    </div>
  );
};

export default Signup;