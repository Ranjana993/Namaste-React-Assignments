import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import "./style.css"
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import ResturantDetail from "./Pages/ResturantDetail";
// import Shimmer from "./Component/Shimmer";
// import Instamart from "./Component/Instamart";


// const Instamart = lazy(() => import('./Component/Instamart'))     



const Applayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
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
                path: '/resturant/:id',
                element: <ResturantDetail />
            },
            {
                path: '/instamart',
                element: <Suspense fallback={<Shimmer/>}>  <Instamart /> </Suspense>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)