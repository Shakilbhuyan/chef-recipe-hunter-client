import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
      fetch('https://chef-hunter-server-shakilbhuyan.vercel.app/chef')
      .then(res => res.json())
      .then(data=> setRecipes(data))
    },[])
    return (
        <div>
            <h3 className='text-danger'>All Recipes</h3>
            {
         recipes.map(recipe => <div className='fw-bold' key={recipe.id}>
            <li>{recipe.list_of_recipes.recipe1.recipe}</li>
            <li>{recipe.list_of_recipes.recipe2.recipe}</li>
            <li>{recipe.list_of_recipes.recipe3.recipe}</li>
         </div>)
            }
        </div>
    );
};

export default LeftNav;