import React from 'react';

const Recipe = ({title,calories,image,ingredients,url}) => {
    return(
        <div className="recipe-card">
            <h1>Title: {title}</h1>
            <p className="bold">Ingredients:</p>
            <ol className="list">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><span className="bold">URL link:</span> {url}</p>
            <p>{calories}</p>
            <img src={image} />
        </div>
    )
}

export default Recipe;