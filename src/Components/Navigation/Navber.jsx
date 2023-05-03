import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Navber = () => {
    return (
        <div>
            <Navbar bg="danger" expand="sm">
                <Container>
                    <Navbar.Brand className='text-white' href="#">SavorChef</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto gap-2 align-items-center">
                            <Link className='text-decoration-none text-white' to="/">Home</Link>
                            <Link  className='text-decoration-none text-white'  to="/blog">Blog</Link>
                            <Link  className='text-decoration-none text-white'  to="/contract">Contract</Link>
                            <Button variant="warning">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Header></Header>
        </div>
    );
};

export default Navber;