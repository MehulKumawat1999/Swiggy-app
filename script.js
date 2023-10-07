import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";
import About from "./components/about/about.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/contact/Contact";
import { Error } from "./components/error/Error";
import RestaurantMenu from "./components/restrauntMenu/RestaurantMenu";
// import Shimmer from "./components/shimmer/Shimmer";


const App = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
        ],
        errorElement: <Error/>
    },
]) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);