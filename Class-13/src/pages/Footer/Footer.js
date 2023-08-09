import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer_wrapper">
                <div className="footer_data">
                    <div className="item">
                        <div className="items_data">
                            <h3>Code-Club </h3>
                            <ul>
                                <li> @ 2023 Abc Technologies <br /> Pvt. Ltd</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="items_data">
                            <h3>Companies</h3>
                            <ul>
                                <li><Link to={"#"}> About</Link> </li>
                                <li> <Link to={"#"}>Careers </Link> </li>
                                <li> <Link to={"#"}>Team </Link></li>
                                <li> <Link to={"#"}> Club-food</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="items_data">
                            <h3>Contact us </h3>
                            <ul>
                                <li><Link to={"#"}> Help & Support</Link> </li>
                                <li><Link to={"#"}> Partner with Us</Link>  </li>
                                <li><Link to={"#"}>Ride with Us </Link> </li>
                                <li><Link to={"#"}> Privacy</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="items_data">
                            <h3>We deliver to</h3>
                            <ul>
                                <li><Link to={"#"}>Banglore </Link> </li>
                                <li><Link to={"#"}> Gurgaon</Link> </li>
                                <li><Link to={"#"}>Delhi </Link> </li>
                                <li><Link to={"#"}>Haryana </Link> </li>
                                <li><Link to={"#"}> Mumbai</Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Social media connect ...... */}
                <div className="social">
                    <h2>Connect Us on </h2>
                    <div className="icons">
                        <Link to={"#"}><i className="fa fa-instagram" style={{ fontSize: "24px" }}></i>  </Link>
                        <Link to={"#"}><i className="fa fa-facebook" style={{ fontSize: "24px" }}></i> </Link>
                        <Link to={"#"}> <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i></Link>
                        <Link to={"#"}> <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i></Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer