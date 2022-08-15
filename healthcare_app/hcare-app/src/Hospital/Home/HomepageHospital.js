/*import React from 'react'; */
import './HomepageHospital.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'

class HomepageHospital extends Component {
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
                <link rel="stylesheet" href="./HomepageHospital.css" />

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
                    <h1>Hippocratic Oath:</h1>

                    <p>I swear by Apollo the physician, and Asclepius, and Hygieia and Panacea and all the gods and goddesses as my witnesses, that, according to my ability and judgement, I will keep this Oath and this contract:

                        To hold him who taught me this art equally dear to me as my parents, to be a partner in life with him, and to fulfill his needs when required; to look upon his offspring as equals to my own siblings, and to teach them this art, if they shall wish to learn it, without fee or contract; and that by the set rules, lectures, and every other mode of instruction, I will impart a knowledge of the art to my own sons, and those of my teachers, and to students bound by this contract and having sworn this Oath to the law of medicine, but to no others.

                        I will use those dietary regimens which will benefit my patients according to my greatest ability and judgement, and I will do no harm or injustice to them.

                        I will not give a lethal drug to anyone if I am asked, nor will I advise such a plan; and similarly I will not give a woman a pessary to cause an abortion.

                        In purity and according to divine law will I carry out my life and my art.

                        I will not use the knife, even upon those suffering from stones, but I will leave this to those who are trained in this craft.

                        Into whatever homes I go, I will enter them for the benefit of the sick, avoiding any voluntary act of impropriety or corruption, including the seduction of women or men, whether they are free men or slaves.

                        Whatever I see or hear in the lives of my patients, whether in connection with my professional practice or not, which ought not to be spoken of outside, I will keep secret, as considering all such things to be private.

                        So long as I maintain this Oath faithfully and without corruption, may it be granted to me to partake of life fully and the practice of my art, gaining the respect of all men for all time. However, should I transgress this Oath and violate it, may the opposite be my fate.</p>
                </div>


            </div>
        );
    }
}

export default HomepageHospital;







