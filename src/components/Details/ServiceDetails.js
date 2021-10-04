import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {id} = useParams();

    const [service, setService] = useState({});
    const url = `./language.JSON/${id}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=>setService(data))
    }, []);
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default ServiceDetails;