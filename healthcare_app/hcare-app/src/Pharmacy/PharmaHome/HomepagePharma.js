/*import React from 'react'; */
import './HomepagePharma.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';

class HomepagePharma extends Component {
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
                    <h1>There are four main roles where pharmacists’involvement or supervision is
expected by society and the individuals they serve:</h1>
<p><li>1. Prepare, obtain, store, secure, distribute, administer, dispense and
dispose of medical products.</li>
<li>2. Provide effective medication therapy management.</li>
<li>3. Maintain and improve professional performance.</li>
<li>4. Contribute to improve effectiveness of the health-care system and
public health.</li></p>
                    </div>


                </div>
    );
    }
}

export default HomepagePharma;




