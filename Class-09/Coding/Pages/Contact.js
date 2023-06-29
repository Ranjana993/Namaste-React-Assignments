import React from 'react'


const Contact = () => {
    return (
            <div className="contact">
                    <p>Contact Us </p>
                    <form>
                        <input type="text" placeholder='Enter Your name' />
                        <input type="text" placeholder='Enter Your name' />
                        <textarea name="description" id="" cols="30" rows="10"></textarea>
                        <button className='btn'>Submit</button>
                    </form>
                </div>
    )
}

export default Contact