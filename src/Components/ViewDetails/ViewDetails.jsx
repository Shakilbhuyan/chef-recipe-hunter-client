import React from 'react';
import { Card } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const { id, chef_name, years_of_experience, num_of_recipes, likes, photo_url } = useLoaderData();
    return (
        <div>
            <div>
                <Card>
                    <Card.Img variant="top" src={photo_url} />
                    <Card.Body>
                        <Card.Title>Name: {chef_name}</Card.Title>
                        <Card.Text className='text-danger'>
                            <p>Expricience: {years_of_experience}</p>
                            <p>Number of Recipes: {num_of_recipes}</p>
                            <p><FaThumbsUp></FaThumbsUp> {likes}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ViewDetails;