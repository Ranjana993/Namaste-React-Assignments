import React, { useState } from 'react'
// import ChildProfile from '../Component/ChildProfile1';
import ChildProfile1 from '../Component/ChildProfile1';
import ChildProfile2 from '../Component/ChildProfile2';


const Profile = () => {

    return (
        <>
            <ChildProfile1  name={"My name is Ranjana "}/>
            <ChildProfile2 name={"My name is Yadav "} />
        </>
    )
}

export default Profile