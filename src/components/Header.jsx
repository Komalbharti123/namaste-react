import {LOGO_URL} from "../../utils/constants"
import {useState} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus"
const Header = ()=>{
    const onlineStatus = useOnlineStatus();
    const [loginButton,setLoginButton]=useState("Login")
    return(
    <div className="flex justify-between">
        <div className="logo-container">
            <img className="w-40"
            src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul className="flex p-4 m-4">
                <li>onlineStatus:{onlineStatus? "🟢":"🔴"}</li>
                <li><Link to="/grocery">Grocery</Link></li>
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