import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = (props) => {
    return (
        <div>
            <Header></Header>

            <div className="container">
                <h2 className="about">About Us</h2>
                <div className="row  d-flex details-teams align-items-center justify-content-center">
                    <div className="col-md-6 w-50">
                        <img className="w-100" src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGlzbGFtaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="col-md-6 ">
                        <p>Education has played a central role in Islam since Ancient times, owing in part to the centrality of scripture and its study in the Islamic tradition. Before the modern era, education would begin at a young age with study of Arabic and the Quran. </p>
                    </div>
                </div>

                {/* philosopy section  */}
                <div className="philosophy">
                    <h2>Our Philosophy</h2> <br />
                    <div className="row  d-flex details-teams align-items-center justify-content-center">
                        <div className="col-md-3 philosophy_cart">
                            <h1 className="p_title">علم</h1>
                            <h3>Knowledge</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but</p>
                            <button className="btn-1">Read More</button>
                        </div>
                        <div className="col-md-3 philosophy_cart">
                            <h3 className="p_title">خدمت</h3>
                            <h3>Mosque Services</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but</p>
                            <button className="btn-1">Read More</button>
                        </div>
                        <div className="col-md-3 philosophy_cart">
                            <h1 className="p_title">امت</h1>
                            <h3>Community</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but</p>
                            <button className="btn-1">Read More</button>
                        </div>
                        <div className="col-md-3 philosophy_cart">
                            <h3 className="p_title">احسان</h3>
                            <h3>Lived Spirtuali</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but</p>
                            <button className="btn-1">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;