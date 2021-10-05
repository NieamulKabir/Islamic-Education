import React from 'react';
import { Link, } from 'react-router-dom';

import './Course.css'

const Course = (props) => {
    const { id, name, title, classStartDate, image, classTime, courseFee } = props.course;
    const url = `/course/${id}`

    return (
        <div>

            {/* all courses data rendering useing api  */}
            <div className="course">
                <div >
                    <img className="w-100" src={image} alt="" />
                </div>
                <div >
                    <small>{name}</small>
                    <h3>{title}</h3>
                    <h6>{classStartDate}</h6>
                    <small>{classTime}</small>
                    <h4>CourseFee: ${courseFee}</h4>
                    <Link to={url}>
                        <button className="btn-2">Details</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Course;