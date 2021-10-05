import { Grid, Typography } from '@mui/material';
import React from 'react';

//hero section component
const Hero = (props) => {
    
    //object destructuring
    const {title, desc, img} = props

    return (
        <Grid sx={{marginTop:5, marginBottom:5, alignItems:"center"}} container spacing={2}>
            <Grid  item xs={6} md={7}>
                <Typography variant="h2" sx={{fontSize:100, mb:4, fontWeight:700, lineHeight:1, textTransform:"capitalize", fontFamily:"Kanit", color:"#2A2D36"}} component="h3">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:25, mb:4}}>
                    {desc}
                </Typography>
            </Grid>
            <Grid item xs={6} md={5}>
                <img className="banner" src={img} alt="" />
            </Grid>
        </Grid>
    );
};

export default Hero;