import React from 'react'
import "./Shimmer.css"

const BannerShimmer = () => {
    return (
        <>
            <div className="Banner_shimmer">
                {
                    Array(15).fill("").map((x, i) =>
                        <>
                            <div className="banner_shimmer" key={i}>
                                <div className="imag"></div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default BannerShimmer