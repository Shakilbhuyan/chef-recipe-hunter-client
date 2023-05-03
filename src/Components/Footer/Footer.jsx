import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-danger p-2'>
                <Row>
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0 text-white">
                        <p>&copy; 2023 SavorChef</p>
                        <p>123 Main Street</p>
                        <p>Anytown, USA 12345</p>
                        <p>Email: savorchef@gmail.com</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <Nav>
                            <Nav.Link className='text-white'  href="#">Privacy Policy</Nav.Link>
                            <Nav.Link className='text-white' href="#">Terms of Use</Nav.Link>
                            <Nav.Link className='text-white' href="#">About us</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
          
        </div>
    );
};

export default Footer;