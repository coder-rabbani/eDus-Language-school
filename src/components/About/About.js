import React from 'react';
import Hero from '../Hero/Hero';
import banner from '../../images/about.svg';
import team from '../../images/about-2.svg';
import './About.css'
import { Grid, Typography } from '@mui/material';

//About compnent
const About = () => {
    return (
        <div>
            <Hero title="Who we are" desc="With over 45 years of experience, eDus is internationally recognized as a leader in effective language training." img={banner}></Hero>
            <Grid style={{padding:"100px 0", alignItems:"center"}} container spacing={2}>
                <Grid item xs={6} md={5}>
                    <img className="banner" src={team} alt="" />
                </Grid>
                <Grid style={{paddingLeft:"100px"}}  item xs={6} md={7}>
                    <Typography variant="h2" sx={{fontSize:50, mb:4, fontWeight:900, lineHeight:1, textTransform:"uppercase"}} component="h3">
                    Why choose Us
                    </Typography>
                    <Typography variant="h4" color="text.secondary" sx={{fontSize:25, mb:4}}>
                        1. Over 20 Years of Experience <br/>
                        2. Exclusive Learning Materials <br/>
                        3. Friendly Learning Environment <br/>
                        4. Professional Teachers <br/>
                        5. Certification <br/>
                        6. Career Upgrade
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;