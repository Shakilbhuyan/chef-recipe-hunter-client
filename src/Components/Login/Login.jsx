import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

     const from = location.state?.from?.pathname || '/';
    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            form.reset();
            navigate(from, {replace:true});
        })
        .catch(error => console.log(error))
    } 
    return (
        <div>
            <Container style={{ boxShadow: '0px 0px 5px rgba(255, 0, 0, 0.5)' }} className="mx-auto w-50  mt-4 p-4">
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="email">
                        <Form.Label className='fw-bold' >Email </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name='email'
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label className='fw-bold' >Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name='password'
                        />
                    </Form.Group>
                    <Button className='mt-2 w-100' variant="dark" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className='text-secondary'>
                        Don't Have An Account?
                        <Link className='text-decoration-none  link-danger' to="/register">Please Register!</Link>
                    </Form.Text>
                    <Form.Text className='text-success'>

                    </Form.Text>
                    <Form.Text className='text-success'>

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;