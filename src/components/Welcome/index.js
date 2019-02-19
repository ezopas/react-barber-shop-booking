import React from 'react';
import './style.scss';

const Welcome = ({}) =>{
    return (
    <div className="hero-wrap js-fullheight bg2 text-center" data-stellar-background-ratio="0.5" id="index">
            <div className="container">
                <div className="md-6 middles">
                    <p className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">NFQ academy</p>
                    <h1 className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">We will make you stylish</h1>
                    <a href="#calendar" className="btn btn-primary px-4 py-3">Book an Appointment</a>
                </div>
                <div className="slider-text text-center"
                     data-scrollax-parent="true">
                    <a href="https://vimeo.com/45830194" className="" target="_blank">
                        <span className="icon-play" ></span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;