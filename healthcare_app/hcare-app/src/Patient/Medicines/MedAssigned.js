/*import React from 'react'; */
import './MedAssigned.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';

var appointments = [1, 2, 3, 4]

class MedAssigned extends Component {
    constructor(props) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            
            this.props.lat = position.coords.latitude;});
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
                                <li class="box"><a href="/phome">Home</a></li>
                                <li class="box"><a href="/pmeds">Medicine</a></li>
                                <li class="box"><a href="/ptests">Tests</a></li>
                                <div className="dropdown">
                                    <button className="dropbtn"><a href="#">Appointments</a></button>
                                    <div className="dropdown-content">
                                        <a href="/bookapp">Book </a>
                                        <a href="/appsch">Scheduled</a>
                                    </div>
                                </div>

                                <li class="box"><a href="/pprofile">Profile</a></li>
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
                    <div classN></div>
                    <h1>Medicine Prescribed:</h1>

                    {appointments.map(appointment => {
                        return (
                            <div className="profile-info">
                                <div className='medlist'>
                                {appointments.map(app => {
                                 return (
                                    <div className="meds">
                                    <p> Med: &ensp; {this.props.currentUser.serial}</p>
                                    <p> Dose: &ensp; {this.props.currentUser.date}</p>
                                </div>
                                 )})}
                                 </div>
                                <div className="profile-name">
                                    <p> Doctor: &emsp; {this.props.currentUser.id}</p>
                                    <p> Date: &emsp; {this.props.currentUser.id}</p>
                                    <p> Appointment: &emsp; {this.props.currentUser.date}</p>

                                    <div className='btns'>
                                    <div><button className="assigned-button"><a onClick={this.props.onLogout}>Request Delivery</a></button></div>
                                </div>
                                </div>

                                
                                
                            </div>)
                    }) }
                    </div>
            


                </div>
             
        )
        }
}

export default MedAssigned;


