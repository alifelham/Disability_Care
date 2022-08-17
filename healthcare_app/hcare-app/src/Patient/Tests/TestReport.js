/*import React from 'react'; */
import './TestReport.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'

import axios from 'axios';

var idx1 = 1;
var idx2 = 1;

class PatientTestReport extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        medreqs: []
    }

    componentDidMount = () => {
        axios.get(`http://localhost:8080/testReqs/getTestReqByDiagID/${this.props.currentUser.id}`, {
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
      
                    
                    <div className="prof-container">
                    <div className='FP'>
                        <div className='FPh1'><h1>Test Reports:</h1></div>
                        <div className="filter">
                            <button className="f-dropbtn">🔽 Filter</button>
                            <div className="dropdown-content">
                                <a href="#">Reports Uploaded</a>
                                <a href="#">Reports Pending</a>
                            </div>
                        </div>
                    </div>

                    {this.state.medreqs.map(medreq => {
                        if(medreq.delivery === null){
                            return;
                        }
                        idx1 = 1;
                        idx2 = 1;
                        return (
                            <div className="profile-info">
                                <div className='medlist'>
                                    <div className="meds">
                                        {medreq.test.map(meds => {
                                            return (
                                                <p> Test {idx1++}: &ensp; {meds}</p>
                                            )
                                        })}
                                        {medreq.instruction.map(dose => {
                                            return (
                                                <p> Instruction {idx2++}: &ensp; {dose}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="profile-name">
                                    <p> Test ID: &emsp; #{medreq.tid}</p>
                                    <p> PID: &emsp; {medreq.pid}</p>
                                    <p> DID: &emsp; {medreq.did}</p>
                                    <p> Date: &emsp; {medreq.date}</p>

                                
                                    <div><Link to={`/test`}><button type ="button" className="assigned-button">Delivered On: {medreq.delivery}</button></Link></div>
                                   
                                </div>
                            </div>)
                    })}
                    </div>
            


                </div>
             
        )
        }
}

export default PatientTestReport;


