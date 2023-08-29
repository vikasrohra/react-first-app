import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    console.log(err);
    return (
        <div>
            <h1>OOPS!</h1>
            <h2>Something went wrong!</h2>
            <p>{`${status}: ${statusText}`}</p>
        </div>
    )
}

export default Error