import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const err = useRouteError();
    const {status , data} = err;
    return (
        <div>
            <h1>Ooops !! </h1>
            <p>Something went wrong !!! </p>
            <h2>{status +  "  : " + data}</h2>
        </div>
    )
}

export default Error