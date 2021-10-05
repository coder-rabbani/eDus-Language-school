import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

//service component
const Services = () => {
    // state declare
    const [languages, setLanguages] = useState([]);
    
    //use effect hooks for external link
    useEffect(()=>{
        fetch('./language.JSON')
        .then(res=>res.json())
        .then(data => setLanguages(data))
    }, [])

    return (
        <div style={{paddingTop:"70px"}}>
            <Typography variant="h3" align="center" sx={{fontSize:45, mb:4, fontWeight:"bold"}} component="h3">
                Language Courses to Help You Explore The World
            </Typography>
            <Typography align="center" variant="body2" color="text.secondary" sx={{fontSize:30, mb:8}}>
                Our interactive teaching method engages you in the learning process so that you learn communication skills and develop confidence quickly.
            </Typography>
            <Grid className="content-area" container spacing={2}>
                {
                    languages.map(language=><Service
                    key={language.key}
                    language={language}
                    ></Service>)
                }
            </Grid>
        </div>
    );
};

export default Services;