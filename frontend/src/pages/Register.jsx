import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = async(e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
            await axios.post("auth/register", { email, username, password });
            history.push("/login");            
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                    className="logo" 
                    src="https://fontmeme.com/permalink/210927/155be1e03a9715cc5f77e9ab6b1aa5c1.png"
                    alt="" />
                    <Link style={{cursor: "pointer"}} to="/login"><button className="login-btn" >Sign In</button></Link>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movies, TV Shows, and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Email address" ref={emailRef} />
                            <button className="register-btn" onClick={handleStart}>Get Started</button>
                        </div>
                    ) : (
                        <form className="input">
                            <input type="text" placeholder="Username" ref={usernameRef} />
                            <input type="password" placeholder="Password" ref={passwordRef} />
                            <button className="register-btn" onClick={handleFinish}>Start</button>
                        </form>
                    )
                }


            </div>            
        </div>
    )
}

export default Register;
