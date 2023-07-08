import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter, RouterProvider, errorElement, Outlet } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import ResturantDetail from "./Pages/ResturantDetail";
import Instamart from "./Pages/Instamart";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./Pages/Cart";




const Applayout = () => {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Outlet />
                {/* <About />*/}
                {/* <Body />  */}
                <Footer />
            </Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/instamart',
                element: <Instamart />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/resturant/:id',
                element: <ResturantDetail />
            }

        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)