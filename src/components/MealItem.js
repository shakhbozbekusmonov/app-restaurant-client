import React from 'react';
import {Link} from "react-router-dom";

export const MealItem = (props) => {
    const {strMeal, strMealThumb, idMeal} = props;

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-4 mt-3">
            <div className="card h-100">
                <img src={strMealThumb} alt={strMeal}/>
                <div className="card-body align-items-baseline">
                    <h5 style={{height: "81px"}}>{strMeal}</h5>
                    <Link to={`/meals/${idMeal}`} className="btn btn-outline-success mt-3 rounded-0">
                        Watch Recipe
                    </Link>
                </div>
            </div>
        </div>
    );
};