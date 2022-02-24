import React from 'react';
import {CategoryItem} from "./CategoryItem";

export const CategoryList = ({catalog = []}) => {
    return (
        <div className="container">
            <div className="row">
                {catalog.map(item => (
                    <CategoryItem key={item.idCategory} {...item}/>
                ))}
            </div>
        </div>
    );
};