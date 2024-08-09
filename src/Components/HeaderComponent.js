import React from 'react';
import logo from "../assets/coresh.png";

const HeaderComponent = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="Logo" className="me-2" style={{ height: '1.2em' }} />
                    <h5 className="mb-0">coregulation search engine</h5>
                </a>
            </div>
        </nav >
    );
}

export default HeaderComponent;
