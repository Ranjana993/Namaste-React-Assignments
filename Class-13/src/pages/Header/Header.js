import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"
import { useSelector } from 'react-redux'
const logo = "/img/food_club_logo.jpg"

const Header = () => {
    const cartItems = useSelector(store => store.cart.items)
    console.log("cartItems" , cartItems)
    return (
        <>
            <div className="container-header">
                <div className='header'>
                    <div className='header-logo'>
                        <Link to={"/"}>
                            <img data-testid="logo" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='header-items'>
                        <ul>
                            <li><Link to={"/"}>Home </Link> </li>
                            <li><Link to={"/about"}>  AboutUs</Link>  </li>
                            <li><Link to={"/contact "}>  ContactUs</Link>  </li>
                        </ul>
                    </div>
                    <div className="cart">
                        <Link to={"/cart"}> <i className="fa fa-shopping-cart" style={{ fontSize: "24px", color: "white" }}> &nbsp; cart-{cartItems.length}</i> </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header