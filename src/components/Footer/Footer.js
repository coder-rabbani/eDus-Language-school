import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{paddingTop:"50px"}}>
            <Typography align="center" variant="h2" sx={{fontSize:50, fontWeight:900, lineHeight:1}} component="h2">
            <h1 style={{fontSize:"100px", color:"#2A2D36", fontFamily:"Kanit"}}><span style={{color:"#A8EA05"}}>e</span>Dus</h1>
            </Typography>
            <Typography align="center" variant="body2" color="text.secondary" sx={{fontSize:18, mb:4}}>
                © eDus-Language School
            </Typography>
        </div>
    );
};

export default Footer;