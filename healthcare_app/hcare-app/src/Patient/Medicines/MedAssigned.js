/*import React from 'react'; */
import './MedAssigned.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, API_BASE_URL } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

var idx1 = 1;
var idx2 = 1;

class MedRequest extends Component {
    constructor(props) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
        super(props);
    }

    state = {
        medreqs: []
    }

    handleDeliver = (e) => {
        var today = new Date();

        console.log("Hereeee")
        console.log(e)

        axios.post("http://localhost:8080/medReqs/saveMedReq", {
            did: e.did,
            pid: e.pid,
            meds: e.meds,
            dose: e.dose,
            date: e.date,
            phid: 0,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            console.log(res);
            window.location.reload(false);
        })
    }

    componentDidMount = () => {
        axios.get(`http://localhost:8080/prescribedMeds/getPrescribedMedByPID/${this.props.currentUser.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            console.log(res);
            this.setState({ medreqs: res.data })
        })
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
                <link rel="stylesheet" href="./MedAssigned.css" />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link href='https://fonts.googleapis.com/css?family=Readex Pro' rel='stylesheet'></link>


                <nav className="navb">
                    <h6 className="brand"><a href="#"><img src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
                    <div className="main_list" id="mainListDiv">
                        <ul>
                            <li class="box"><a href="/phome">Home</a></li>
                            <li class="box"><a href="/pmeds">Medicine</a></li>
                            <li class="box"><a href="/ptest">Tests</a></li>
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
                    <h1>Medicines Prescribed:</h1>

                    {this.state.medreqs.map(medreq => {

                        idx1 = 1;
                        idx2 = 1;
                        return (
                            <div className="profile-info">
                                <div className='medlist'>
                                    <div className="meds">
                                        {medreq.meds.map(meds => {
                                            return (
                                                <p> Med {idx1++}: &ensp; {meds}</p>
                                            )
                                        })}
                                        {medreq.dose.map(dose => {
                                            return (
                                                <p> Dose {idx2++}: &ensp; {dose}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="profile-name">
                                    <p> Appointment ID: &emsp; {medreq.aid}</p>
                                    <p> Doctor ID: &emsp; {medreq.did}</p>
                                    <p> Date: &emsp; {medreq.date}</p>

                                    <div className='btns'>
                                        <div><Link to={`/pmeds`}><button type="button" className="assigned-button" onClick={() => this.handleDeliver(medreq)}>Request Delivery</button></Link></div>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>



            </div>

        )
    }
}

export default MedRequest;


