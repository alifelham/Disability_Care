/*import React from 'react'; */
import './DocProfile.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../../constants';
import { login } from '../../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'

class DocProfile extends Component {
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
                                <h1>Doctor Profile:</h1>
                                
                                <div className="profile-avatar">
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
                                
                                <div className="profile-name">
                                    <p> Username: &ensp; {this.props.currentUser.name}</p>
                                    <p > Email: &emsp; &emsp; &ensp; {this.props.currentUser.email}</p>
                                    <p> DID: &emsp; {this.props.currentUser.id}</p>
                                    <p> Field: &emsp; {this.props.currentUser.field}</p>
                                    <p> Hospital: &emsp; {this.props.currentUser.hospital}</p>
                                    <p> Address:  &emsp; {this.props.currentUser.address}</p>
                                    <p> Education: &emsp; {this.props.currentUser.edu}</p>
                                    <p> Blood Group: &emsp; {this.props.currentUser.bg}</p>
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
export default DocProfile;
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



