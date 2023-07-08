import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import userContext from "../context/userContext"
import { useSelector } from "react-redux"

const Header = () => {
    const [isLogin, setIslogin] = useState(false)
    const { user } = useContext(userContext)

    const cartSlice = useSelector(store => store.cart?.items);
    console.log(cartSlice)



    return (
        <>
            <div id="header">
                <div id="title">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7ZoFvwEHERij_tgIsHf2aaKZivP_fPcg1Q&usqp=CAU"} alt="logo" />
                </div>
                <div id="items">
                    <ul>
                        <li> <Link to={"/"}> Home</Link></li>
                        <li><Link to={"/about"}>About </Link></li>
                        <li><Link to={"/contact"}>Contact </Link></li>
                        <li><Link to={"/cart"}>Cart - {cartSlice?.length}</Link></li>
                        <li><Link to={"/instamart"}>Instamart </Link></li>
                        {
                            isLogin ? <li onClick={() => setIslogin(!isLogin)}>Logout</li> : <li onClick={() => setIslogin(!isLogin)}><Link to={"/#"}> Login </Link> </li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header