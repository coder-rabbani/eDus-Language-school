import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = (props) => {
    const {name, img, description} = props.language;
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
                    <Button sx={{border:"2px solid #A8EA05", color:"black", padding:"10px 30px"}} size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;