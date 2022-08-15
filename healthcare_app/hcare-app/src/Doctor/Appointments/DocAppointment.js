/*import React from 'react'; */
import './DocAppointment.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, API_BASE_URL } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

class Appointment extends Component {
    constructor(props){
        super(props)
    }

    state={
        appointments: []
    }

    handleCancel=(id)=>{
        axios.delete(`http://localhost:8080/appointment/deleteAppointmentByAID/${id}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                        }}).then(res=>{
                            window.location.reload(false);
                        })
    }

    componentDidMount =()=>{
        axios.get(`http://localhost:8080/appointment/getAppointmentsByDID/${this.props.currentUser.id}`, {
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


                <div className="profile-container">
                    <div classN></div>
                    <h1>Appointments:</h1>

                    {this.state.appointments.map(appointment => {
                        return (
                            <div className="profile-info">

                                <div className="profile-name">
                                    <p> Serial: &ensp; {appointment.aid}</p>
                                    <p> Date: &ensp; {appointment.date}</p>
                                    <p> Time: &ensp; {appointment.date}</p>
                                    <p> PID: &emsp; {appointment.pid}</p>
                                </div>

                                <div className='btns'>
                                    <div><button className="cancel-button"><a onClick={()=>this.handleCancel(appointment.aid)}>Cancel</a></button></div>
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


