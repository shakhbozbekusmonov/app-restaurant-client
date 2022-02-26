import React from 'react';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className="footer bg-light">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start align-items-center">
                    <span className="footer__copyright">
                        Copyright &copy; {new Date().getFullYear()} ShahNur Software
                    </span>
                </div>
            </div>
        </footer>
    );
};