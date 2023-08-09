import React from 'react'
import "./Contact.css"
const contactUs = "/img/contact-us.jpg"


const Contact = () => {
    return (
        <>
            <div className="container_contact">
                <div className="contact_img">
                    <img src={contactUs} alt="" />
                </div>
                <div className="info_contact_us">
                <h2>Contact Us </h2>
                    <form>
                        <label htmlFor="name">Name</label><br />
                        <input type="text" placeholder='Enter Your name here..' /><br />
                        <label htmlFor="name">Email </label><br />
                        <input type="text" placeholder='Enter Your email here....' /><br />
                        <label htmlFor="msg">Message</label><br />
                        <textarea placeholder='Enter your message here' name="msg" id="" cols="30" rows="10"></textarea>
                        <button className='btn_contact'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact