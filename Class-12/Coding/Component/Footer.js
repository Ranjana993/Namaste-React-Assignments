import React , {useContext} from "react"
import userContext from "../context/userContext"

const Footer = () => {
    const {user} = useContext(userContext)
    return (
        <>
            <div id="footer">
                <h3>Copyrighted &nbsp;@ 2023 </h3>
                {/* <h3>Copyrighted &nbsp;@ 2023  {user.name}</h3> */}
                <p>Created by Ranjana Yadav </p>
            </div>
        </>
    )
}

export default Footer