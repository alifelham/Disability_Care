/*import React from 'react'; */
import './DiagProfile.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'

class DiagProfile extends Component {
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
                                <li class="box"><a href="/diaghome">Home</a></li>
                                <li class="box"><a href="/testreq">Test Requests</a></li>
                                <li class="box"><a href="/test">Tests</a></li>
                                <li class="box"><a href="/dprofile">Profile</a></li>
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
                     <h1>Diagnostic Center Profile:</h1>
                            <div className="profile-info">
                                            
                                <div className="profile-name">
                                    <p> Name: &ensp; {this.props.currentUser.name}</p>
                                    <p > Email: &emsp; &emsp; &ensp; {this.props.currentUser.email}</p>
                                    <p> ID: &emsp; {this.props.currentUser.id}</p>
                                    <p> Address:  &emsp; {this.props.currentUser.address}</p>
                                </div>
                            </div>
                            
                    </div>


                </div>
    );
    }
}

export default DiagProfile;



