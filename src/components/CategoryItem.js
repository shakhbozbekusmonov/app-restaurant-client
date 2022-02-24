import React from 'react';
import {Link} from "react-router-dom";

export const CategoryItem = (props) => {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;
    return (
            <div className="col-4 mt-3">
                <div className="card h-100">
                    <img src={strCategoryThumb} className="w-100" alt="Meal"/>
                    <div className="card-body">
                        <h3>{strCategory}</h3>
                        <p>{strCategoryDescription}</p>
                        <Link to={`/category/${idCategory}`} className="btn btn-outline-success rounded-0">Watch category</Link>
                    </div>
                </div>
            </div>
    );
};