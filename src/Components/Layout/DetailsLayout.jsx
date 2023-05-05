import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navber from '../Navigation/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const DetailsLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default DetailsLayout;