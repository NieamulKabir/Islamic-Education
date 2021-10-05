import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TeamMember from '../TeamMember/TeamMember';
import './OurTeams.css'

const OurTeams = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetch('./team.json')
            .then(res => res.json())
            .then(data => setTeamMembers(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <br />
                <h2 >Our Team</h2>
                <br />
                <div className="team_container">
                    {
                        teamMembers.map(teamMember => <TeamMember
                            key={teamMember.id}
                            teamMember={teamMember}
                        >

                        </TeamMember>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurTeams;