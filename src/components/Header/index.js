import React from 'react';

const Header = ({}) =>{
    return (<div>
            {/*<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top" id="ftco-navbar">*/}
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">NFQ Trim barber shop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="#index" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#services" className="nav-link">Services &amp; Pricing</a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;