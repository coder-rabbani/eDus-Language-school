import React from 'react';
import './NotFound.css';
import notfound from '../../images/404.svg'

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <h3 style={{fontSize:"40px", textAlign:"center", marginTop:"20px"}}>Sorry, the page u are looking for is not found!</h3>
        </div>
    );
};

export default NotFound;