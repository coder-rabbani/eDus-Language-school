import { Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = {
        borderBottom:"1px solid #A8EA05"
    }
    return (
        <Grid className="header" container spacing={2}>
            <Grid item md={4}>
                <NavLink className="logo" to="/">
                    <h1 className="logo-text"><span>e</span>Dus</h1>
                </NavLink>
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