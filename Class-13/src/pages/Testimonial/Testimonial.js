import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { testimonial } from '../../contants/Testimonial';
import "./Testimonial.css"



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};




const Testimonial = () => {


    return (
        <>

            <h1 className='test_header'>Testimonial...</h1>
            <Carousel
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                slidesToSlide={1}
                className='testimonial_wrapper'
            >
                {
                    testimonial.map((item) => (
                        <div className="testimonial" key={item.id}>
                            <div className="testi_image">
                                <div className="wrapper">
                                    <img  src={item.img} alt="" />
                                    <h2>Name : {item.name}</h2>
                                    <h3> {item.profession}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </>
    )
}

export default Testimonial