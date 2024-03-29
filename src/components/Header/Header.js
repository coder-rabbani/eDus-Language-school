import { Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

//header component
const Header = () => {

    //custom css
    const activeStyle = {
        borderBottom:"2px solid #A8EA05"
    }

    return (
        <Grid style={{alignItems:"center"}} container spacing={2}>
            <Grid item md={4}>
                <NavLink style={{textDecoration:"none"}} to="/">
                    <h1 style={{fontSize:"100px", color:"#2A2D36", fontFamily:"Kanit", lineHeight:"100px"}}><span style={{color:"#A8EA05"}}>e</span>Dus</h1>
                </NavLink>
                <p style={{fontSize:"22px", color:"#2A2D36", fontFamily:"Kanit", margin:"-10px 0 0 0", letterSpacing:"5px"}}>A Language School</p>
            </Grid>
            <Grid className="nav" item md={8}>
                <NavLink className="menu-item" activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink className="menu-item" activeStyle={activeStyle} to="/about">About</NavLink>
                <NavLink className="menu-item" activeStyle={activeStyle} to="/services">Services</NavLink>
                <NavLink className="menu-item" activeStyle={activeStyle} to="/contact">Contact</NavLink>
            </Grid>
        </Grid>
    );
};

export default Header;