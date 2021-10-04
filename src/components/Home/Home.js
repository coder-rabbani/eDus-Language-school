import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import banner from '../../images/banner.png';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [languages, setLanguages] = useState([]);
    
    useEffect(()=>{
        fetch('./language.JSON')
        .then(res=>res.json())
        .then(data => setLanguages(data))
    }, [])
    return (
        <div className="main">
            <Grid className="hero-section" container spacing={2}>
                <Grid  item xs={6} md={7}>
                    <h2 className="hero-title">Language <span>Having Fun!</span></h2>
                    <p>Learn the languages you always want. We have the international reputation for high quality teaching and success</p>
                </Grid>
                <Grid item xs={6} md={5}>
                    <img className="banner" src={banner} alt="" />
                </Grid>
            </Grid>
            <Grid className="content-area" container spacing={2}>
                {
                    languages.map(language=><Service 
                            key={language.key} 
                            language={language}
                        ></Service>
                    )
                }
            </Grid>
        </div>
    );
};

export default Home;