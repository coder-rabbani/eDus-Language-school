import React from 'react';
import './Contact.css';
import map from '../../images/contact.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RoomIcon from '@mui/icons-material/Room';
import {Grid, Typography } from '@mui/material';

//contact component
const Contact = () => {
    return (
        <div>
            <Grid style={{padding:"100px 0", alignItems:"center"}} container spacing={2}>
                <Grid item xs={6} md={5}>
                    <img className="banner" src={map} alt="" />
                </Grid>
                <Grid style={{paddingLeft:"100px"}}  item xs={6} md={7}>
                    <Typography variant="h2" sx={{fontSize:50, mb:4, fontWeight:900, lineHeight:1, textTransform:"uppercase"}} component="h3">
                    Contact Us
                    </Typography>

                    <a style={{textDecoration:"none", color:"black"}} href="mailto:thegolamrabbani@gmail.com"><div href="#" style={{display:"flex"}}>
                    <MailOutlineIcon/>
                    <p style={{marginLeft:"10px"}}>thegolamrabbani@gmail.com</p> 
                    </div></a>

                    <a style={{textDecoration:"none", color:"black"}} href="tel:+8801748565175"><div style={{display:"flex", padding:"20px 0"}}>
                    <LocalPhoneIcon/>
                    <p style={{marginLeft:"10px"}}>+8801748565175</p> 
                    </div></a>

                    <div style={{display:"flex"}}>
                    <RoomIcon/>
                    <p style={{marginLeft:"10px"}}>Birganj, Dinajpur, Bangladesh</p> 
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;