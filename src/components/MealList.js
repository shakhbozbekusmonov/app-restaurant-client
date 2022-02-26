import React from 'react';
import {MealItem} from "./MealItem";

export const MealList = ({meals}) => {
    return (
        <div className="container">
            <div className="row">
                {meals.map(meal => (
                    <MealItem key={meal.idMeal} {...meal}/>
                ))}
            </div>
        </div>
    );
};