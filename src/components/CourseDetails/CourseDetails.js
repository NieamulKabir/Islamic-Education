import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './CourseDetails.css'

const CourseDetails = () => {
    const { courseId } = useParams();
    const [courseDetails, setCourseDetails] = useState({});

    useEffect(() => {
        let value = '';
        fetch(`https://gist.githubusercontent.com/NieamulKabir/94ec78449e66ac9bd79df15a81753bda/raw/5a93834d62e125089656fc53e887b446e337d9bd/gistfile1.txt`)
            .then(res => res.json())
            .then(data => {
                value = data.find(result => (result.id === parseInt(courseId))) //condition check
                setCourseDetails(value);
            })
    }, [courseId])
    return (
        <div>
            <Header></Header>
            <div className="course_details container">
                <h1>Course Details</h1> <br />
                <img src={courseDetails?.image} alt="" />
                <h2>{courseDetails?.title}</h2>
                <h3>{courseDetails?.details?.classDuration}</h3>
                <p>{courseDetails?.details?.discription}</p>
                <Link to="/courses">
                    <button className="back_button"> Back To Courses</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CourseDetails;