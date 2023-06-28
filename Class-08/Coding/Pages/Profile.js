import React, { useState } from 'react'

const Profile = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Profile</div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default Profile