import React, { useState } from 'react';

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    return (
        <>
            <h1>Functional Component Profile</h1>
            <h2>{props.name}</h2>
            <p>{count}</p>
            <button onClick={() => {
                setCount(1);
                setCount2(1);
            }}>Set Count</button>
        </>
    )
}

export default Profile;