import React from 'react'
import "./Payment.css"

const playStore = "../../img/play_store.webp"
const appleStore = "../../img/app_store.webp"

const Payment = () => {
    return (
        <>
            <div className="payment_container">
                <div className="payment_info">
                    <h4>
                        For better experience,<span style={{color:'red'}}>download  </span>  the Food-Club  app now
                    </h4>
                </div>
                <div className="payment_img">
                    <img src={playStore} alt="" />
                    <img src={appleStore} alt="" />
                </div>
            </div>
        </>
    )
}

export default Payment