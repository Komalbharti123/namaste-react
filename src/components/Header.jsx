import {LOGO_URL} from "../../utils/constants"
import {useState} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus"
const Header = ()=>{
    const onlineStatus = useOnlineStatus();
    const [loginButton,setLoginButton]=useState("Login")
    return(
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-200 lg:bg-teal-300">
        <div className="logo-container">
            <img className="w-40"
            src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-8">
                <li className="m-2">onlineStatus:{onlineStatus? "🟢":"🔴"}</li>
                <li className="m-2"><Link to="/grocery">Grocery</Link></li>
                <li className="m-2"><Link to ="/">Home</Link></li>
                <li className="m-2"> <Link to ="/about">About Us</Link></li>
                <li className="m-2"><Link to="/contactUs">Contact Us</Link></li>
                <li className="m-2">Cart</li>
                <button className="login" onClick={()=>{
                    loginButton==="Login"?setLoginButton("Logout"):setLoginButton("Login")
                }}>{loginButton}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;