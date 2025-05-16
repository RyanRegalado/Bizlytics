import React from "react";
import logo from "../images/logo.svg"
import "./Header.css"

function Header() {
    return (
        <div className = "header">    
            <div className = "left">
                <img src={logo} className="logo" alt = "Site Logo" />
                <button className = "dashboard">Dashboard</button>
            </div>
            <div className = "authorization-buttons">    
                <button className="login-button" alt = "Log in Button" > Log In </button>
                <button className = "sign-up-button"> Sign Up </button>
            </div> 
        </div>
    )
}

export default Header