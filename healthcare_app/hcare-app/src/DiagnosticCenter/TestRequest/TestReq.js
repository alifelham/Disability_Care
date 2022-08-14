/*import React from 'react'; */
import './TestReq.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, API_BASE_URL } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';
import axios from 'axios';

var idx1 = 1;
var idx2 = 1;

class TestRequest extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        medreqs: []
    }

    handleDeliver = (e) => {
        var today = new Date();

        e.delivery = today;

        console.log("Hereeee")
        console.log(e)

        axios.put("http://localhost:8080/testReqs/updateTestReq", {
            tid: e.tid,
            did: e.did,
            pid: e.pid,
            test: e.test,
            instruction: e.instruction,
            date: e.date,
            diagID: e.diagID,
            delivery: today,
            report: null
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            console.log(res);
        })
    }

    handleDefer = (e) => {
        e.diagID++;
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            },
            method: 'put',
            url: API_BASE_URL + '/testReqs/updateTestReq',
            data: e
        }).then(res => {
            console.log(res);
            window.location.reload(false);
        })
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
                            <li class="box"><a href="/pharmahome">Home</a></li>
                            <li class="box"><a href="/medreq">Requests</a></li>
                            <li class="box"><a href="/meddelivery">Deliveries</a></li>
                            <li class="box"><a href="/pharmaprofile">Profile</a></li>
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
                    <h1>Test Requests:</h1>

                    {this.state.medreqs.map(medreq => {
                        if(medreq.delivery !== null){
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

                                    <div className='btns'>
                                        <div><Link to={`/testreq`}><button className="defer-button" type="button" onClick={() => this.handleDefer(medreq)}><a>Defer</a></button></Link></div>
                                        <div><Link to={`/test`}><button type ="button" className="assigned-button" onClick={() => this.handleDeliver(medreq)}>Deliver</button></Link></div>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>



            </div>

        )
    }
}

export default TestRequest;


