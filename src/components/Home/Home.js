import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [surahs, setSurahs] = useState([]);
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setSurahs(data))
    }, [])
    return (
        <div>
            <h2 className="home_title">Holy Quran</h2>
            <div className="container">
                <div className="row">
                    {
                        surahs.map(surah =>
                            <div className="col-md-4">
                                <div className="cart">

                                    <div className="text-area">

                                        <h4>{surah.title}</h4>
                                        <p>{surah.discription}</p>


                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;

