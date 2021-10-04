import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import banner from '../../images/banner.png';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [languages, setLanguages] = useState([]);
    
    useEffect(()=>{
        fetch('./homeLanguage.JSON')
        .then(res=>res.json())
        .then(data => setLanguages(data))
    }, [])
    return (
        <div className="main">
            <Hero title="Language Having Fun!" img={banner} desc="Learn the languages you always want. We have the international reputation for high quality teaching and success"></Hero>
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

export default Home;