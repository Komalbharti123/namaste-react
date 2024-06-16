import {LOGO_URL} from "../utils/constants"
import {useState} from "react"
const Header = ()=>{
    const [loginButton,setLoginButton]=useState("Login")
    return(
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo"
            src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    loginButton==="Login"?setLoginButton("Logout"):setLoginButton("Login")
                }}>{loginButton}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;