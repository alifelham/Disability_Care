/*import React from 'react'; */
import './MedDelivery.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';
import axios from 'axios';

var idx1 = 1, idx2 = 1;

class MedDelivery extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        meddel: []
    }

    componentDidMount = () => {
        axios.get(`http://localhost:8080/medReqs/getMedReqByPHID/${this.props.currentUser.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            console.log(res.data);
            this.setState({ meddel: res.data })
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
                    <h1>Medicine Deliveries:</h1>

                    {this.state.meddel.map(medreq => {
                        if(medreq.delivery === null){
                            return;
                        }
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
                                    <p> Order: &emsp; #{medreq.rid}</p>
                                    <p> PID: &emsp; {medreq.pid}</p>
                                    <p> DID: &emsp; {medreq.did}</p>
                                    <p> Delivery Address: &emsp; {this.props.currentUser.location}</p>
                                    <p> Order Date: &emsp; {medreq.date}</p>
                                    <p className="assigned-button"> Delivery Date: &emsp; {medreq.delivery}</p>
                                </div>
                            </div>
                            )
                    })}
                </div>
            </div>

        )
    }
}

export default MedDelivery;


