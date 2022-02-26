import React, { useState, useEffect } from 'react';
import { getAllCategories } from "../tools/api";
import {Loader} from "../components/loader/Loader";
import {CategoryList} from "../components/CategoryList";
import {Search} from "../components/Search";
import {useHistory, useLocation} from "react-router-dom";

export const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const {push} = useHistory();

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() =>{
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search ? data.categories.filter(item =>
                item.strCategory
                    .toLowerCase()
                    .includes(search.split("=")[1].toLowerCase())) : data.categories
            );
        })
    }, [search]);

    return (
        <>
            <Search callBack={handleSearch}/>
            {!catalog.length ? (
                <Loader/>
            ) : (
                <CategoryList catalog={filteredCatalog}/>
            )}
        </>
    );
};