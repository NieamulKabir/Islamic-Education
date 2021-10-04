import React from 'react';

import Menubar from '../MenuBar/Menubar';
import './Header.css'

const Header = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <Menubar></Menubar>
                    
                    <div className="">
                        <h1 className="title">
                            "O MANKIND"
                        </h1>
                        <p className="text-white text-center mt-3">
                            There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by injected <br /> humour, or randomised words...
                        </p>
                        <button className="mt-3 about-btn">About Us</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;