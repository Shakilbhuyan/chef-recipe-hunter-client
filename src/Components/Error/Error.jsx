import React from 'react';
import pic from '../../assets/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='mx-auto'>
            <img src={pic} alt="" />
            <Button  variant='danger'><Link className='text-decoration-none' to="/">Go TO Home</Link></Button>
        </div>
    );
};

export default Error;