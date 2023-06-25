import React, { useState } from "react"
import { LOGO_URL } from "../constant"

const Header = () => {
    const [isLogin, setIslogin] = useState(false)
    return (
        <>
            <div id="header">
                <div id="title">
                    <img src={LOGO_URL} alt="logo" />
                </div>
                <div id="items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        {
                            isLogin ? <li onClick={() => setIslogin(!isLogin)}>Logout</li> : <li onClick={() => setIslogin(!isLogin)}>Login</li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header