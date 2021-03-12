import React, { useEffect, useState, } from 'react';
import { useParams } from "react-router-dom";
import Banner from '../../Components/Photo/male.png';
import Facebook from '../../Components/Icon/Facebook.png';
import Twitter from '../../Components/Icon/Twitter.png';
import YouTube from '../../Components/Icon/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faMarsStroke, } from '@fortawesome/free-solid-svg-icons';





const TeamDetails = () => {
    const [details, setDetails] = useState({});
    const { idTeam } = useParams()

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))

    }, [idTeam])

    const { strTeam, intFormedYear, strCountry, strSport, strTeamBanner,  strDescriptionEN, strGender, strFacebook, strTwitter, strYoutube } = details;

    const bannerStyle = {
        width: '300%',
    }
    const textColor = {
        color: 'black',
        marginLeft: '20px',
        marginTop: '10px'
    }
    const bgColor = {
        backgroundColor:' #1c02e3',
    }
    const clubName = {
        color: 'white',
        width: '700rem'
    }


    return (
        <div className="container bg-light">
            <div style={bannerStyle}>
                <img src={strTeamBanner} alt="" width='33%' />
            </div>
            <div  className="d-flex justify-content-center my-4" style={bgColor}>
                <div class="card mb-3" style={{ maxWidth: '900px' }}>
                    <div class="row g-0">
                        <div class="col-md-7" style={bgColor}>
                            <div class="card-body" style={clubName}>
                                <h1 class="card-title ">{strTeam}</h1>
                                <p class="card-text m-0"><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Founded: {intFormedYear}</p>
                                <p class="card-text m-0"><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country: {strCountry}</p>
                                <p class="card-text m-0"><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sport Type: {strSport}</p>
                                <p class="card-text m-0"><FontAwesomeIcon icon={faMarsStroke}></FontAwesomeIcon>  Gender: {strGender} </p>
                                <p class="card-text m-0"><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country: {strCountry}</p>
                            </div>
                        </div>
                        <div class="col-md-5 d-flex align-items-center" style={bgColor}>
                            <img className="w-100" src={Banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="team" style={textColor}>{strDescriptionEN}</p>
            <div className="text-center">
                <a href={`https://${strFacebook}`}>
                    <img src={Facebook} alt="" width="45px" />
                </a>
                <a href={`https://${strTwitter}`}>
                    <img src={Twitter} alt="" width="45px" />
                </a>
                <a href={`https://${strYoutube}`}>
                    <img src={YouTube} alt="" width="45px" />
                </a>



            </div>
        </div >
    );
};

export default TeamDetails;