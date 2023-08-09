import React from 'react'
import "./Shimmer.css"

const Shimmer = () => {
    return (
        <>
            <div className="shimmer">
                {
                    Array(15).fill("").map((x, i) =>
                        <>
                            <div className="wrapper-shimmer" key={i}>
                                <div className="box"></div>
                                <div className="child"></div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Shimmer