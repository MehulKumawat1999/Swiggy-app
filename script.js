import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";
import About from "./components/about/about.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact/Contact";
// import Shimmer from "./components/shimmer/Shimmer";


const App = () => {
    return (
        <div>
            <Header/>
            <Body/>
            
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
]) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);