import React,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error"
import RestaurantMenu from "./src/components/RestaurantMenu"

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

const Grocery = lazy(()=>import("./src/components/Grocery"));

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
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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

