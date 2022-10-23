import React from 'react';
import loading from "./../../../assets/images/loading.gif";

export const Preloader = () => {
    return (
        <img style={{width: "400px", display: "block", margin: "0 auto"}} src={loading}/>
    );
};