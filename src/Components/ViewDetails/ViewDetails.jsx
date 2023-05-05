import React, { useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { FaStar, FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const [buttonStates, setButtonStates] = useState({
        button1Disabled: false,
        button2Disabled: false,
        button3Disabled: false
      });
    const { id, chef_name, years_of_experience, num_of_recipes, likes, photo_url ,list_of_recipes} = useLoaderData();

// disable function

const handleDisable = (button)=>{
    setButtonStates(prevState => ({
        ...prevState,
        [button]: true
      }));
}

    return (
        <div  className='d-flex gap-2 mt-4 mb-4 align-items-center justify-content-center p-2'>
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
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>{list_of_recipes.recipe1.recipe}</th>
                            <th>{list_of_recipes.recipe2.recipe}</th>
                            <th>{list_of_recipes.recipe3.recipe}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-danger'>Ingrediants</td>
                            <td>{list_of_recipes.recipe1.ingredients}</td>
                            <td>{list_of_recipes.recipe2.ingredients}</td>
                            <td>{list_of_recipes.recipe3.ingredients}</td>
                        </tr>
                        <tr>
                            <td className='text-danger'>Cooking Method</td>
                            <td>{list_of_recipes.recipe1.cooking_method}</td>
                            <td>{list_of_recipes.recipe2.cooking_method}</td>
                            <td>{list_of_recipes.recipe3.cooking_method}</td>
                        </tr>
                        <tr>
                            <td className='text-danger'>Rating</td>
                            <td><span className='text-danger'><FaStar></FaStar></span> {list_of_recipes.recipe1.rating}</td>
                            <td><span className='text-danger'><FaStar></FaStar></span> {list_of_recipes.recipe2.rating}</td>
                            <td><span className='text-danger'><FaStar></FaStar></span> {list_of_recipes.recipe3.rating}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button onClick={()=>handleDisable("button1Disabled")} disabled={buttonStates.button1Disabled} variant='danger'>Favourit</Button></td>
                            <td><Button onClick={()=>handleDisable("button2Disabled")} disabled={buttonStates.button2Disabled} variant='danger'>Favourit</Button></td>
                            <td><Button onClick={()=>handleDisable("button3Disabled")} disabled={buttonStates.button3Disabled} variant='danger'>Favourit</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ViewDetails;