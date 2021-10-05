import React from 'react';
import './NotFound.css';
import notfound from '../../images/404.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const backToHome = () =>{
        history.push(`/`)
    }
    return (
        <div style={{textAlign:"center", padding:"60px 0"}}>
            <img src={notfound} alt="" />
            <h3 style={{fontSize:"40px", textAlign:"center", marginTop:"20px"}}>Sorry, the page you are looking for is not found!</h3>
            <Button onClick={backToHome} variant="contained" style={{ marginTop:"30px", fontSize:"22px"}} startIcon={<ArrowBackIcon />}>
            Back To Home
            </Button>
        </div>
    );
};

export default NotFound;