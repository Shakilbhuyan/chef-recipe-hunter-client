import React from 'react';
import Navber from '../Navigation/Navber';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';
import Footer from '../Footer/Footer';


const Layout = () => {
    return (
        <div>
            <Navber></Navber>
           <Container>
            <Row>
                <Col lg={3}>
                <LeftNav></LeftNav>
                </Col>
                <Col lg={6}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>
                  <RightNav></RightNav>
                </Col>
            </Row>
           </Container>
           <Footer></Footer>
        </div>
    );
};

export default Layout;