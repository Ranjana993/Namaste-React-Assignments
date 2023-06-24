import React from "react"

const Resturant = ({ cloudinaryImageId, name, cuisines, area, lastMileTravelString, costForTwoString, avgRating, }) => {

    return (
        <>
            <div id="card">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
                <h2>{name}</h2>
                {/* <h4>{cuisines.join(", ")}</h4> */}
                <h4>{area}</h4>
                <span>
                    <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
                    <h4>{lastMileTravelString}</h4>
                    <h4>{costForTwoString}</h4>
                </span>
            </div>
        </>
    )
}

export default Resturant