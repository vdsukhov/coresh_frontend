import React from 'react';
import logo from "../assets/coresh.png";

const HeaderComponent = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="Logo" className="me-2" style={{ height: '1.2em' }} />
                    <h5 className="mb-0">coregulation search engine</h5>
                </a>
                <a
                    href="https://vdsukhov.github.io/coresh_frontend/pages/input.html"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Documentation
                </a>
            </div>
        </nav>
    );
}

export default HeaderComponent;
