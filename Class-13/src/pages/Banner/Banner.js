import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "./Banner.css"
import BannerShimmer from '../../components/Shimmer/BannerShimmer';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};




const Banner = () => {
    const [data, setData] = useState([])

    const getBannerData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4854596&lng=78.4448738&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        setData(json.data.cards[1].card.card.imageGridCards.info)
    }

    useEffect(() => {
        getBannerData();
    }, [])

    // console.log("data => ", data);

    return (
        <>

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
                className='crausel-item'
            >
                {
                    data.length === 0 ? <BannerShimmer /> : data.map((item) => (
                        <div className="banner" key={item.id}>
                            <div className="imag">
                                <img src={`https://res.cloudinary.com/swiggy/image/upload/${item.imageId}`} alt="" />
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </>
    )
}

export default Banner