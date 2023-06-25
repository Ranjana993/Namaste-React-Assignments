import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";




const Applayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)