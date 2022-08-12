/*import React from 'react'; */
import './Profile.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!localStorage.getItem(ACCESS_TOKEN)) {
            return <Redirect
                to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                }} />;
        }
        return (
            <div className='bg'>
                <meta charSet="UTF-8" />
                <title>Patient Homepage</title>
                <link rel="stylesheet" href="./HomepagePatient.css" />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link href='https://fonts.googleapis.com/css?family=Readex Pro' rel='stylesheet'></link>
                
             
                    <nav className="navb">
                        <h6 className="brand"><a href="#"><img src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
                        <div className="main_list" id="mainListDiv">
                            <ul>
                                <li class="box"><a href="phome">Home</a></li>
                                <li class="box"><a href="#">Medicine</a></li>
                                <li class="box"><a href="#">Tests</a></li>
                                <div className="dropdown">
                                    <button className="dropbtn"><a href="#">Appointments</a></button>
                                    <div className="dropdown-content">
                                        <a href="#">Book </a>
                                        <a href="#">Scheduled</a>
                                    </div>
                                </div>

                                <li class="box"><a href="/profile">Profile</a></li>
                                {/* <li><button className="logout-button"><a href="#">Logout</a></button></li> */}
                                <li><button className="logout-button"><a onClick={this.props.onLogout}>Logout</a></button></li>
                            </ul>
                            <div style={{ clear: 'both' }} />
                        </div>

                        <div className="media_button">
                            <button className="main_media_button" id="mediaButton">
                                <span />
                                <span />
                                <span />
                            </button>
                        </div>

                    </nav>

                    <div className="profile-container">
                    
                            <div className="profile-info">
                                <h1>USER INFORMATION:</h1>
                                {/*
                                (<div className="profile-avatar">
                                    {
                                        this.props.currentUser.imageUrl ? (
                                            <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name} />
                                        ) : (
                                            <div className="text-avatar">
                                                <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                            </div>

                                        )
                                    }
                                </div> 
                                */}
                                <div className="profile-name">
                                    <p> Username: &ensp; {this.props.currentUser.name}</p>
                                    <p > Email: &emsp; &emsp; &ensp; {this.props.currentUser.email}</p>
                                    <p> PID: &emsp; {this.props.currentUser.id}</p>
                                    <p> Address:  &emsp; {this.props.currentUser.address}</p>
                                    <p>Provider:  &emsp; {this.props.currentUser.provider}</p>
                                </div>
                            </div>
                            <div className="profile-info">
                                <h1>MEDICAL HISTORY:</h1>
                                <div className="profile-name">
                                    <p> Diabetes: &ensp; {this.props.currentUser.diabetes}</p>
                                    <p > Blood Pressure: &emsp; &emsp; &ensp; {this.props.currentUser.bp}</p>
                                    <p> Asthma: &emsp; {this.props.currentUser.asthma}</p>
                                    <p> Allergies:  &emsp; {this.props.currentUser.name}</p>
                                    <p> Kidney:  &emsp; {this.props.currentUser.name}</p>
                                </div>
                            </div>
                            <div className="profile-info">
                                <h1>MEDICAL REPORTS:</h1>
                                <div className="profile-name">
                                    <p> Date: &ensp; {this.props.currentUser.name}</p>
                                    <p > Date: &emsp; &emsp; &ensp; {this.props.currentUser.name}</p>
                                    <p> Date: &emsp; {this.props.currentUser.name}</p>
                                    <p> Date:  &emsp; {this.props.currentUser.name}</p>
                                    <p> Date:  &emsp; {this.props.currentUser.name}</p>
                                </div>
                            </div>
                    </div>


                </div>
    );
    }
}
class hamburgeroption extends Component {
    constructor(props) {
        super(props);
        this.hamburger = this.hamburger.bind(this);
    }



    hamburger(document) {
        var mainListDiv = document.getElementById("mainListDiv"),
            mediaButton = document.getElementById("mediaButton");

        mediaButton.onclick = function () {

            "use strict";

            mainListDiv.classList.toggle("show_list");
            mediaButton.classList.toggle("active");
        };
    }
}
export default Profile;
{/*}

hamburgerfun(){
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
} */}



