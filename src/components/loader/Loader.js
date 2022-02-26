import React from 'react';
import './loader.scss';
import {FadeLoader} from "react-spinners";

export const Loader = () => {
    return (
        <div className="loader">
            <FadeLoader color="#7dba29" size="100"/>
        </div>
    );
};