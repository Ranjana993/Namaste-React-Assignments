import React from 'react'
import "./WorkingPage.css"
const step1  = "../../../img/step1.png"
const step2  = "../../../img/step2.png"
const step3 = "../../../img/step3.png"
const step4 = "../../../img/step3.png"

const WorkingPage = () => {
    return (
        <div>
            <div className="wrapper-work">
                <h1>How it works </h1>
                <p>Get Your Favourite food in just 4 Simple Steps </p>
                <div className="container-wrapper">
                    <div className="working_cards">
                        <img src={step1} alt="" />
                        <br />
                        <button>Search</button>
                        <p>Find all restaurants available near you</p>
                    </div>
                    <div className="working_cards">
                        <img src={step2} alt="" /><br />
                        <button>Choose</button>
                        <p>Browse the food items  you like</p>
                    </div>
                    <div className="working_cards">
                        <img src={step3} alt="" /><br />
                        <button>Pay</button>
                        <p>It's quick, secure and easy , to get your food</p>
                    </div>
                    <div className="working_cards">
                        <img src={step4} alt="" /><br />
                        <button>Enjoy</button>
                        <p>Food is prepared & delivered to your door</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkingPage