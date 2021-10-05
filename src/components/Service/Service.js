import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

//service component
const Service = (props) => {

    //object destructuring
    const {id, name, img, description} = props.language;

    //dynamic url generate
    const url = `/service/${id}`;

    //use history hooks
    const history = useHistory();

    // button handler
    const handleDetails = () =>{
        history.push(url);
    }
    
    return (
        <Grid item xs={6} md={6}>
            <Card sx={{margin:"10px"}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={img}
                />
                <CardContent sx={{padding:"30px"}}>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{padding:"0 30px 30px"}}>
                    <Button onClick={handleDetails}  sx={{border:"1px solid #2A2D36", color:"black", padding:"10px 30px"}} size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;