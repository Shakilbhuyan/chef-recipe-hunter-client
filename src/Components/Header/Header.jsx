import React from 'react';
import { Carousel } from 'react-bootstrap';
import food1 from '../../assets/picture.jpg';
import food2 from '../../assets/picture1.jpg';
import food3 from '../../assets/picture2.jpg';

const Header = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={food2}
                        alt="First slide"
                        style={{height:"400px"}}
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>SavorChef</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={food1}
                        alt="Second slide"
                        style={{height:"400px"}}
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>Find the Best FOOD Recipe Here</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={food3}
                        alt="Third slide"
                        style={{height:"400px"}}
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>Find The Best Chef</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;