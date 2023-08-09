import React from 'react'
import "./Menu.css"



const Menu = ({ cloudinaryImageId, name, cuisines, areaName, locality, costForTwo, avgRating }) => {
// const {cloudinaryImageId, name, cuisines, area, locality, costForTwo, avgRating} = info
    return (
        <>
            <div id="card">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
                <h2>{name}</h2>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{areaName}</h4>
                <span>
                    <h4 style={avgRating < 4 ? { backgroundColor: "#FF6666" } : avgRating === "--" ? { backgroundColor: "white", color: "black" } : { color: "white" }
                    }>
                        <span className="fa fa-star"></span>
                        {avgRating}
                    </h4>
                    {/* <h4>{locality}</h4> */}
                    <h4>{costForTwo}</h4>
                </span>
            </div>
        </>

    )
}

export default Menu