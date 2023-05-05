import React from 'react';
import { Card } from 'react-bootstrap';
import pic1 from '../../assets/flat-lay-delicious-christmas-dish-assortment.jpg';
import pic2 from '../../assets/delicious-pumpkin-pie-soup.jpg';
import pic3 from '../../assets/dinner.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='text-danger'>Our Best Recipes</h2>
            <Card className='mb-2'>
                <Card.Img variant="top" src={pic1} />
                <Card.Body>
                    <Card.Title>Beef Wellington</Card.Title>
                </Card.Body>
            </Card>

            <Card className='mb-2'>
                <Card.Img variant="top" src={pic2} />
                <Card.Body>
                    <Card.Title>Sherpherds pie</Card.Title>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={pic3} />
                <Card.Body>
                    <Card.Title>Fish and Pie</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RightNav;