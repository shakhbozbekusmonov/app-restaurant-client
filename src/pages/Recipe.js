import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getMealId} from "../tools/api";
import {Loader} from "../components/loader/Loader";

export const Recipe = () => {
    const [recipe, setRecipe] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);
    const {id} = useParams();
    const {goBack} = useHistory();

    useEffect(() => {
        getMealId(id).then(data => setRecipe(data.meals[0]))
    }, [])

    const recipeShow = () => {
        setShowRecipe(!showRecipe);
    }

    return (
        <div className="container">
            <button type="button" className="btn btn-outline-success rounded-0 my-3" onClick={goBack}>Go Back</button>
            <div className="row">
                {!recipe.idMeal ? (
                    <Loader/>
                ) : (
                    <div className="col-12">
                        <div className="card">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                            <div className="card-body">
                                <h1>{recipe.strMeal}</h1>
                                <h6><b>Category: </b>{recipe.strCategory}</h6>
                                {recipe.strArea ? <h6><b>Area: </b>{recipe.strArea}</h6> : null}
                                <p>{recipe.strInstructions}</p>
                                <button type="button" className="btn btn-outline-primary rounded-0 my-3" onClick={recipeShow}>Show Recipe</button>
                                {showRecipe ? (
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <th>Ingredient</th>
                                            <th>Measure</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Object.keys(recipe).map(key => {
                                            if (key.includes('Ingredient') && recipe[key]){
                                                return (
                                                    <tr>
                                                        <td>{recipe[key]}</td>
                                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                                    </tr>
                                                )
                                            }
                                        })}
                                        </tbody>
                                    </table>
                                ) : null}
                                {recipe.strYoutube ? (
                                    <div>
                                        <h5>Video Recipe</h5>
                                        <iframe src={`https://youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen title={id}/>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};