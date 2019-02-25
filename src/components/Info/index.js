import React from 'react';
//import './style.scss';

const Info = ({}) =>{
    return (
        <section className="ftco-intro">
            <div className="container-wrap">
                <div className="wrap d-md-flex align-items-end">
                    <div className="info">
                        <div className="row no-gutters">
                            <div className="col-md-4 d-flex">
                                <div className="icon"><span className="icon-phone"></span></div>
                                <div className="text">
                                    <h3>+370 (123) 456 7890</h3>
                                    <p>Vilnius downtown</p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="icon"><span className="icon-my_location"></span></div>
                                <div className="text">
                                    <h3>Konstitucijos pr.</h3>
                                    <p>123</p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="icon"><span className="icon-clock-o"></span></div>
                                <div className="text">
                                    <h3>Open Monday-Friday</h3>
                                    <p>10:00 - 20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social pl-md-5 p-4">
                        <ul className="social-icon">
                            <li className="ftco-animate"><a href=""><span className="icon-twitter"></span></a>
                            </li>
                            <li className="ftco-animate"><a href=""><span className="icon-facebook"></span></a>
                            </li>
                            <li className="ftco-animate"><a href=""><span className="icon-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;
