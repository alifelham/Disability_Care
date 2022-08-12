/*import React from 'react'; */
import './appointment.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';

var appointments = [1, 2, 3, 4]

class Appointment extends Component {
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
                            <li class="box"><a href="hhome">Home</a></li>
                            <li class="box"><a href="/appreq">Appointment Requests</a></li>
                            <li class="box"><a href="/app">Appointments</a></li>
                            <li class="box"><a href="/hprofile">Profile</a></li>
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
                    <div classN></div>
                    <h1>Appointments:</h1>

                    {appointments.map(appointment => {
                        return (
                            <div className="profile-info">

                                <div className="profile-name">
                                    <p> Serial: &ensp; {this.props.currentUser.serial}</p>
                                    <p> Date: &ensp; {this.props.currentUser.date}</p>
                                    <p> PID: &emsp; {this.props.currentUser.id}</p>
                                    <p> DID: &emsp; {this.props.currentUser.id}</p>
                                </div>

                                <div className='btns'>
                                    <div><button className="cancel-button"><a onClick={this.props.onLogout}>Cancel</a></button></div>
                                    <div><button className="assigned-button"><a>Assigned</a></button></div>
                                </div>
                            </div>)
                    }) }
                    </div>
            


                </div>
             
        )
        }
}

export default Appointment;


