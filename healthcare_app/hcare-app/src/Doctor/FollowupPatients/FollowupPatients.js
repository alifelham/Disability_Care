/*import React from 'react'; */
import './FollowupPatients.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';

var appointments = [1, 2]

class FollowupPatients extends Component {
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

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link href='https://fonts.googleapis.com/css?family=Readex Pro' rel='stylesheet'></link>


                <nav className="navb">
                    <h6 className="brand"><a href="#"><img src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
                    <div className="main_list" id="mainListDiv">
                        <ul>
                            <li class="box"><a href="/dochome">Home</a></li>
                            <li class="box"><a href="/docapp">Appointments</a></li>
                            <li class="box"><a href="/folpat">Followup Patients</a></li>
                            <li class="box"><a href="/docprofile">Profile</a></li>
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


                <div className="prof-container">
                    <div className='FP'>
                        <div className='FPh1'><h1>Followup Patients:</h1></div>
                        <div className="filter">
                            <button className="f-dropbtn">🔽 Filter</button>
                            <div className="dropdown-content">
                                <a href="#">Reports Available</a>
                                <a href="#">Reports Unavailable</a>
                            </div>
                        </div>
                    </div>

                    {appointments.map(appointment => {
                        return (
                            <div className="profile-info">

                                <div className="profile-name">
                                    <p> Name: &emsp; {this.props.currentUser.name}</p>
                                    <p> PID: {this.props.currentUser.id}</p>
                                    <p> Last Appointment: &ensp; {this.props.currentUser.date}</p>
                                    <p> Next Appointment: &ensp; {this.props.currentUser.date}</p>
                                    <p> Time: &ensp; {this.props.currentUser.time}</p>
                                    <p>------------------------------------------</p>
                                    <p> Report Requested: </p>
                                    {appointments.map(app => {
                                        return (
                                            <div className="meds">
                                                <p> r: &ensp; {this.props.currentUser.serial}
                                                 {/* If status yes: */}
                                                 <button className="available-button"><a>✔</a></button></p>
                                            </div>
                                        )
                                    })}
                                    <p>------------------------------------------</p>
                                    <p> Medicines Given: &emsp; {this.props.currentUser.name}</p>
                                </div>

                                <div className='btns'>
                                    <div><button className="cancel-button"><a onClick={this.props.onLogout}>Cancel</a></button></div>
                                    <div><button className="assigned-button"><a>Mail ✉️</a></button></div>
                                </div>
                            </div>)
                    })}
                </div>



            </div>

        )
    }
}

export default FollowupPatients;


