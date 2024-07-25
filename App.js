import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"

/*
* Header
*   Logo
*   Nav Items
* Body
*   Searchs
*   RestaurantContainer
*      RestaurantCard
* Footer
*   Copyright
*   Links
*   Address
*   Contact
*/

const AppLayout =()=>(
   
    <div className="app">
         <Header />
         <Outlet />
    </div>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contactUs",
                element:<ContactUs/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>

            }
        ],
        errorElement:<Error/>
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

