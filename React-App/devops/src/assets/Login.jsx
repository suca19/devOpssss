import React, { useState, useEffect } from "react";
import './css/style.css'
import user from "./img/user-logo.png"
import {globalUpdateEmail, globalUpdatePassword, login, loginUser, useAppStore} from "./Store/store";

function Login() {

    const email = useAppStore.use.email;
    const password = useAppStore.use.password;





    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
    }, []);


    const togglePasswordVisibility = () => {
        const passwordField = document.getElementById("password");
        const eyeIcon = document.querySelector(".eye-icon");

        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    };

    function save(){
        localStorage.setItem("email",
            JSON.stringify(email));
        localStorage.setItem("password",
            JSON.stringify(password));
    }
    function handleSubmit()
    {
        save();
        window.location.href = "/calendar";
    }
    useEffect(() => {
        togglePasswordVisibility();
    }, []);

    return (
        <body className="align">
        <div className="grid">
            <form className="lf form login" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <img className="user" src={user} alt="User Logo"/>
                <div className="form_field">
                    <label className="label-form"><i className="fas fa-user" style={{color: '#606468'}}></i></label>
                    <input onChange={(event) => globalUpdateEmail(event.target.value)} type="text" name="username"
                           id="username" className="form_input" placeholder="USERNAME" required/>
                </div>
                <div className="form_field">
                    <label className="label-form"><i className="fas fa-lock" style={{color: '#606468'}}></i></label>
                    <input onChange={(event) => globalUpdatePassword(event.target.value)} type="password" id="password"
                           name="password" className="form_input" placeholder="PASSWORD" required/>
                    <i className="fas fa-eye eye-icon" onClick={togglePasswordVisibility}></i>
                </div>
                <div className="container">
                    <input type="checkbox" id="rememberMeCheckbox"/>
                    <label className="label-checkbox" htmlFor="rememberMeCheckbox">Remember Me</label>
                    <a href="./change-password"><p className="forgot-password">Forgot your password ?</p></a>
                </div>
                <div className="form_field">
                    <button type="submit" className="submitButton">LOGIN</button>
                </div>



            </form>
        </div>
        </body>
    );
}

export default Login;
