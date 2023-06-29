const Shimmer = () => {
    return (
        <div className='shimmer-container'>
            {
                Array(18).fill("").map((x, i) =>
                    <div className="box" key={i}> </div>
                )
            }
        </div>
    )
}

export default Shimmer