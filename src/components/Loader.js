import React from 'react';

// Gif
import spinner from "../gif/Iphone-spinner-2.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='Loading' />
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;