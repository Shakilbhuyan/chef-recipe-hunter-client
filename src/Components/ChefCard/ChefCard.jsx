import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import {FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const{id, chef_name, years_of_experience, num_of_recipes, likes, photo_url} = chef;
    return (
        <div>
            <Row xs={1} md={1}className="g-4 mb-2 p-2">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={photo_url} />
                            <Card.Body>
                                <Card.Title>Name: {chef_name}</Card.Title>
                                <Card.Text className='text-danger'>
                                   <p>Expricience: {years_of_experience}</p>
                                   <p>Number of Recipes: {num_of_recipes}</p>
                                   <p><FaThumbsUp></FaThumbsUp> {likes}</p>
                                </Card.Text>
                                <Button variant="danger"><Link className='text-decoration-none text-white' to={`/recipe/${id}`}>View Recipes</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
};

export default ChefCard;