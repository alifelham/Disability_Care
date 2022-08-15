/*import React from 'react'; */
import './availableDoctors.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, API_BASE_URL } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import PID from '../RequestedAppointments/Appointment';

import Appointment from '../Appointments/Appointment';
import AppointmentReq from '../RequestedAppointments/Appointment';

var appointments = [1, 2, 3, 4]

class AvailableDoctors extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        doctors: [],
        date: null
    }

    handleAssign = (did) => {
        let arr = window.location.pathname.split("/");

        var id = arr[arr.length - 1];

        axios.get(`http://localhost:8080/appReqs/getPIDbyID/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            axios.post('http://localhost:8080/appointment/saveAppointment', {
                did: did,
                pid: res.data.pid,
                date: res.data.date,
                hid: this.props.currentUser.id
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                }
            })
                .then(res => {
                    axios.delete(`http://localhost:8080/appReqs/deleteAppReq/${id}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                        }}).then(res=>{
                            console.log(res.data);
                        })
                })
        })
    }

    handleSubmit = event => {
        axios.post('http://localhost:8080/appReqs/saveAppReq', {
            field: "neuro",
            hid: 1,
            id: 4,
            pid: 1,
            date: this.state.date
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                //This line of code will redirect you once the submission is succeed
            })
    }
    handleChange = event => {
        this.setState({ date: event.target.value });
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/availableDoc/getAvailableDocsByHID/${this.props.currentUser.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            console.log(res);
            this.setState({ doctors: res.data })
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
                        <li class="box"><a href="/dochome">Home</a></li>
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
                    <h1>Available Doctors:</h1>

                    {this.state.doctors.map(doc => {
                        return (
                            <div className="profile-info">

                                <div className="profile-name">
                                    <p> Doctor: &ensp; {doc.name}</p>
                                    <p> DID: &emsp; {doc.did}</p>
                                    <p> Field:  &emsp; {doc.field}</p>
                                    <p> Date:  &emsp; {doc.date}</p>
                                    <p> Time:  &emsp; {doc.start_time} - {doc.end_time}</p>
                                </div>

                                <div className='btns'>
                                    <div><Link to='/app'><button className="assign-button" onClick={() => this.handleAssign(doc.did)}><a>Assign</a></button></Link></div>
                                </div>
                            </div>)
                    })}

                    <form onSubmit={this.handleSubmit}>
                        <input type="date" id="start" name="date"
                            min="2022-08-01" max="2030-12-31" onChange={this.handleChange}></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>



            </div>
        );
    }
}


export default AvailableDoctors;


