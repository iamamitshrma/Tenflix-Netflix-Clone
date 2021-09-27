import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { login } from '../authContext/apiCalls';
import { AuthContext } from '../authContext/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {dispatch} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({email, password}, dispatch);
    }

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                    className="logo" 
                    src="https://fontmeme.com/permalink/210927/155be1e03a9715cc5f77e9ab6b1aa5c1.png"
                    alt="" />
                </div>
            </div>

            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone" onChange={e=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
                    <button className="login-btn" onClick={handleLogin}>Sign In</button>

                    <span>New to Tenflix? <b><NavLink to="/register">Sign Up Now.</NavLink></b></span>
                    <small>This Page is protected by Google reCAPTCHA to ensure you are not a bot. <b>Learn More</b></small>
                </form>
            </div>            
        </div>
    )
}

export default Login;
