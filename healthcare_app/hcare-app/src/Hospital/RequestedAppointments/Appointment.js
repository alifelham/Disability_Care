/*import React from 'react'; */
import './appointment.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, API_BASE_URL } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';
import axios from 'axios';
import AvailableDoctors from '../Doctors/availableDoctors';

var index = 0;
var PID = 0;

class AppointmentReq extends Component {
    constructor(props){
        super(props)

        this.state = {
            appointments: []
        }
    }

    handleDefer = (e)=>{
        e.hid++;
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            },
            method: 'put',
            url: API_BASE_URL + '/appReqs/updateAppReq',
            data: e
          });

        window.location.reload(false);
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/appReqs/getAppReqByHID/${this.props.currentUser.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            console.log(res);
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
                                <li class="box"><a href="/profile">Profile</a></li>
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
                    <h1>Appointment Requests:</h1>

                        {this.state.appointments.map(appointment => 
                    {
                        return(
                            <div className="profile-info">
                                
                                <div className="profile-name">
                                    <p> Appointment ID: &ensp; {appointment.id}</p>
                                    <p> Date: &ensp; {appointment.date}</p>
                                    <p> PID: &emsp; {appointment.pid}</p>
                                    <p> Field:  &emsp; {appointment.field}</p>
                                </div>

                                <div className='btns'>
                                    <div><Link to={`/appreq`}><button className="defer-button" type="button" onClick={()=>this.handleDefer(appointment)}><a>Defer</a></button></Link></div>
                                    <div><Link to={`/avdoc/${appointment.id}`}><button className="assign-button">Assign</button></Link></div>
                                </div>
                            </div>)
                    }) }
                    </div>
                    


                </div>
    );
    }
}


export default AppointmentReq;


