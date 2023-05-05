import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                form.reset();
            })
            .catch((error) => {
                console.log(error)
            })
    };
    const handleAccepted = (event)=>{
        setAccepted(event.target.checked)
    }
    return (
        <Container style={{ boxShadow: '0px 0px 5px rgba(255, 0, 0, 0.5)' }} className="mx-auto w-50  mt-4 p-4">
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group controlId="email">
                    <Form.Label className='fw-bold'  >Email </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        required
                    />
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Label className='fw-bold' >Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name='name'
                        required
                    />
                </Form.Group>
                <Form.Group controlId="photoUrl">
                    <Form.Label className='fw-bold' >PhotoURL </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="PhotoURL"
                        name='photo'
                        required
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label className='fw-bold' >Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name='password'
                        required
                    />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name='terms' label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                </Form.Group>
                <Button className='mt-2 w-100' disabled={!accepted} variant="dark" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-secondary'>
                    Already Have An Account?
                    <Link className='text-decoration-none  link-danger ' to="/login">Please Login!</Link>
                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;