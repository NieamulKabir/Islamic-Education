import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_content">
                <h3> <i className="fas fa-mosque"></i> Islamic Center</h3>
                <p>An aspect of the feminization of poverty is reflected in the situation <br /> of single women heads of households. During the pandemic, they form one of the poorest segments of society.The Coronavirus <br /> has made life more difficult for single women heads of households and exposes them to multiple risks</p>
            </div>
            <div className="row d-flex details-teams align-items-center justify-content-center contact">
                <div className="col-md-6 socia-icon">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter-square"></i>
                </div>
                <div className="col-md-6">
                    <h4><i className="fas fa-phone-square-alt"></i> +11 234 789909</h4>
                    <h4><i className="fas fa-map-marked-alt"></i> 46 Street,Building No 03 <br /> Iran</h4>
                </div>
            </div>
            <div className="allright">
                <h3 >Nieamul © . All rights reserved.2021</h3>
            </div>

        </div>
    );
};

export default Footer;