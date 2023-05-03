import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <h2 className='text-danger'>Our Chefs</h2>
            {
                chefs.map(chef => <ChefCard
                key={chef.id}
                chef={chef}
                ></ChefCard>)
            }
        </div>
    );
};

export default Home;