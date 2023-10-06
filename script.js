import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";
// import Shimmer from "./components/shimmer/Shimmer";
 
const App = () => {
    return (
        <div>
            <Header/>
            <Body/>
            
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);