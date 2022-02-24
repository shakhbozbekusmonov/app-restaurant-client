import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-light navbar-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="/images/logo.png" className="logo__brand" alt="Logo"/>
                    </Link>

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Home🍕</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About🍽</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact☕</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};