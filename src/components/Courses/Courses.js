import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div >
            <Header></Header>
            <div className="container">
                <h1 className="courses_title">Our Courses</h1>
                <div className="courses">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Courses;