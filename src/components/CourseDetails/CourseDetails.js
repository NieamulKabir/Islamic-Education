import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const { courseId } = useParams();
    const [courseDetails, setCourseDetails] = useState({});

    useEffect(() => {
        let abc = '';
        fetch(`http://localhost:3000/courses.json`)
            .then(res => res.json())
            .then(data => {
                abc = data.find(result => (result.id === parseInt(courseId)))
                setCourseDetails(abc);
            })
    }, [courseId])
    return (
        <div className="course_details">

            <img src={courseDetails?.image} alt="" />
            <h1>{courseDetails?.title}</h1>
            <h2>{courseDetails?.details?.classDuration}</h2>
            <p>{courseDetails?.details?.discription}</p>
        </div>
    );
};

export default CourseDetails;