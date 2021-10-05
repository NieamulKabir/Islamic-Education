import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menubar.css'
const Menubar = () => {
    return (
        <div className="Menubar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                           
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">

                                <NavLink to="/home" className="items">
                                    <li>HOME</li>
                                </NavLink>

                                <NavLink to="/about" className="items">
                                    <li>ABOUT US</li>
                                </NavLink>

                                <NavLink to="/courses" className="items">
                                    <li>OUR COURSES</li>
                                </NavLink>

                                <NavLink to="/ourteam" className="items">
                                    <li>OUR TEAM</li>
                                </NavLink>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;