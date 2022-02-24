import React, { useState, useEffect } from 'react';
import { getAllCategories } from "../tools/api";
import {Loader} from "../components/loader/Loader";
import {CategoryList} from "../components/CategoryList";

export const Home = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() =>{
        getAllCategories().then(data => {
            setCatalog(data.categories);
        })
    }, [])

    return (
        <>
            {!catalog.length ? (
                <Loader/>
            ) : (
                <CategoryList catalog={catalog}/>
            )}
        </>
    );
};