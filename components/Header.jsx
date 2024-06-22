import {LOGO_URL} from "../utils/constants"
import {useState} from "react"
import {Link} from "react-router-dom"
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
                <li><Link to ="/">Home</Link></li>
                <li> <Link to ="/about">About Us</Link></li>
                <li ><Link to="/contactUs">Contact Us</Link></li>
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