import React from 'react';
import './Contact.css';
import map from '../../images/contact.svg'
import { Grid, TextField, Typography } from '@mui/material';

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
                    <TextField id="standard-basic" label="Name" variant="standard" />
                    <TextField id="standard-basic" label="Email" variant="standard" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;