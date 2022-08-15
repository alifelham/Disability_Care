/*import React from 'react'; */
import './Profile.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../../constants';
import { login } from '../../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

var idx = 0;
class PatientProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medreqs: {}
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:8080/patient/getPatient/${this.props.currentUser.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            }
        }).then(res => {
            this.setState({
                medreqs: res.data
            })

            console.log(this.state.medreqs)
        })
    }

    render() {
        const { medreqs } = this.state

        const {
            PID,
            diabetes,
            asthma,
            blood,
            allergy,
            kidney,
            reports,
            reportNames
        } = medreqs

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

                <div className="profile-container">
                    <h1>USER INFORMATION:</h1>
                    <div className="profile-info">


                        (<div className="profile-avatar">
                            {
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name} />
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>

                                )
                            }
                        </div> )



                        <div className="profile-name">
                            <p> Username: &ensp; {this.props.currentUser.name}</p>
                            <p> Email: &emsp; {this.props.currentUser.email}</p>
                            <p> PID: &emsp; {this.props.currentUser.id}</p>
                            <p> Address:  &emsp; {this.props.currentUser.address}</p>
                        </div>
                    </div>
                    <h1>MEDICAL HISTORY:</h1>
                    <div className="profile-info">

                        <div className="profile-name">
                            {diabetes ? <p> Diabetes: &ensp; Yes </p> : <p>Diabetes: &ensp; No</p>}
                            {blood ? <p> Blood: &ensp; Yes </p> : <p>Blood: &ensp; No</p>}
                            {asthma ? <p> Asthma:  &ensp; Yes </p> : <p>Asthma: &ensp; No</p>}
                            {allergy ? <p> Allergy: &ensp; Yes </p> : <p>Diabetes: &ensp; No</p>}
                            {kidney ? <p> Kidney: &ensp; Yes </p> : <p>Kidney: &ensp; No</p>}
                        </div>
                    </div>
                    <h1>MEDICAL REPORTS:</h1>

                    {reports &&
                        reports.map((rep) => (

                            <div className="profile-info">

                                <div className="profile-name">
                                    <p>{reportNames[idx++]}: <a href={rep}>Download</a></p>
                                </div>
                            </div>
                        ))}

                </div>


            </div>
        );
    }
}

export default PatientProfile;




