import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import banner from '../../images/banner.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import './Home.css'

//home component
const Home = () => {
    //declare state
    const [languages, setLanguages] = useState([]);
    
    //load data
    useEffect(()=>{
        fetch('./homeLanguage.JSON')
        .then(res=>res.json())
        .then(data => setLanguages(data))
    }, []);

    // useHistory Hooks 
    const history = useHistory();

    //button handler
    const allServices = () =>{
        history.push(`/services`)
    }

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
                <div style={{margin:"0 auto",}}>
                    <Button onClick={allServices} variant="contained" style={{ marginTop:"50px", fontSize:"18px", background:"#2A2D36", textTransform:"capitalize"}} endIcon={<ArrowForwardIcon />}>
                    View All Services
                    </Button>
                </div>
            </Grid>
        </div>
    );
};

export default Home;