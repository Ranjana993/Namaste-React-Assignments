import React from "react"

const FoodItem = ({ imageId, name, price ,description }) => {

    return (
        <>
            <div className="cart-item">
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`}  alt="img" />
                <h2>{name}</h2>
                <p>{description}</p>
                <h4> Rs {price / 100}</h4>
            </div>
        </>
    )
}

export default FoodItem