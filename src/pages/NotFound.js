import React from 'react';
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="text-center">
            <h1 className="text-center my-5">Page Not Found <b>404 Error!</b></h1>
            <Link to="/">Back to Home.</Link>
        </div>
    );
};