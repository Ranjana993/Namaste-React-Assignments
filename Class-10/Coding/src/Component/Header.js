import React, { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isLogin, setIslogin] = useState(false)
    return (
        <>
            <div id="header" className="bg-green-400 flex p-3 justify-between">
                <div id="title">
                    <img className="h-10 rounded-full" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7ZoFvwEHERij_tgIsHf2aaKZivP_fPcg1Q&usqp=CAU"} alt="logo"  />
                </div>
                <div id="items">
                    <ul className="flex items-center">
                        <li className="mx-6"> <Link to={"/"}> Home </Link></li>
                        <li className="mx-6"><Link to={"/about"}>About </Link></li>
                        <li className="mx-6"><Link to={"/contact"}>Contact </Link></li>
                        <li className="mx-6"><Link to={"/instamart"}>Instamart </Link></li>
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