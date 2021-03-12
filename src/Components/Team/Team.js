import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Team = (props) => {
    const { idTeam, strTeam, strSport, strTeamBadge } = props.team;

    return (
        <div className="col my-3">
            <Card className="text-center" style={{width: '21rem',}}>
                <Card.Img className="p-4" variant="top" src={strTeamBadge}/>
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sports type: {strSport} <br />
                    </Card.Text>
                    <Button as={Link} to={`/team/${idTeam}`} variant="success">Explore </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;