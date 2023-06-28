import React from 'react'
import Profile from './Profile'
import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <div id="wrapper">
                <div className="content">
                    <h2>Find ur dream food at  instantly </h2>
                    <p>We are enlighted to share you that we are offering 20% discount on first order of food ..</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio, culpa quibusdam laudantium ut consequatur blanditiis itaque vero, nobis quod commodi odio sint maiores vitae mollitia doloremque natus autem! Quod?</p>
                    <Link to={"/"}>Explore more ...</Link>
                </div>
            </div>
            <h2 style={{textAlign:'center', margin:'2rem' , fontSize:'2rem',textTransform:'uppercase'}}>Get To know About Me..... </h2>
            <Profile name={"Ranjana from class component "} />
        </>

    )
}

export default About