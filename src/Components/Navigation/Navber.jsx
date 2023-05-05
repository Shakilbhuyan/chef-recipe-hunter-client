import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                            <Button variant="warning"><Link className='text-decoration-none text-white' to="/login">Login</Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </div>
    );
};

export default Navber;