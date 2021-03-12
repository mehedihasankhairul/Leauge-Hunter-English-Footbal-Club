import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import {Container} from 'react-bootstrap';
// import TeamDetails from '../TeamDetails/TeamDetails';
import mainImg from '../Photo/Rectangle21.png'




const Home = () => {
    const [Teams, setTeams] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);
  
    return (
        <Container className="bg-info">
        <div class="card bg-dark text-white">
        <img src={mainImg} class="card-img" alt="..."/>
        <div class="card-img-overlay text-center mt-5">
          <h1 className="font-weight-bold" class="card-title">League Hunter</h1>
        </div>
      </div>
            <div className="row d-flex justify-content-center">
                {
                    Teams.map(team => <Team team={team}></Team>)
                }
                
            </div>
            </Container>


    );
};

export default Home;