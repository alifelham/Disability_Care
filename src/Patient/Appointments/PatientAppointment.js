/*import React from 'react'; */
import './PatientAppointment.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, API_BASE_URL } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

class Appointment extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        appointments: []
    }

    handleCancel = (id) => {
        axios.delete(`http://localhost:8080/appointment/deleteAppointmentByAID/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            window.location.reload(false);
        })
    }

    componentDidMount = () => {
        axios.get(`http://localhost:8080/appointment/getAppointmentsByPID/${this.props.currentUser.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            console.log("Lalalal" + res);
            this.setState({ appointments: res.data })
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
                <link rel="stylesheet" href="./PatientAppointment.css" />

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
                    <h1>Appointments:</h1>

                    {this.state.appointments.map(appointment => {
                        return (
                            <div className="profile-info">

                                <div className="profile-name">
                                    <p> Link: &ensp; <a href={appointment.link}>Join</a></p>
                                    <p> Date & Time: &ensp; {appointment.date}</p>
                                    <p> DID: &emsp; {appointment.did}</p>
                                </div>

                                <div className='btns'>
                                    <div><button className="cancel-button"><a onClick={() => this.handleCancel(appointment.aid)}>Cancel</a></button></div>
                                </div>
                            </div>)
                    })}
                </div>



            </div>

        )
    }
}

export default Appointment;


