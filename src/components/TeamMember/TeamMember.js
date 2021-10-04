import React from 'react';
import './TeamMember.css'

const TeamMember = (props) => {
    const{name,title,imgurl}=props.teamMember;
    return (
        <div className="member">
            <div>
                <img src={imgurl} alt="" />

            </div>
            <div>
                <h3>{name}</h3>
                <h5>{title}</h5>
            </div>
        </div>
    );
};

export default TeamMember;