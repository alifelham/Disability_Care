/*import React from 'react'; */
import './HomepagePatient.css';
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../constants';
import { login } from '../util/APIUtils'; 
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';

class HomepagePatient extends Component {

  render() {

    return (
      <div className='bg'>
        <meta charSet="UTF-8" />
        <title>CodePen - portfolio home page 3</title>
        <link rel="stylesheet" href="./homepagePatient.css" />
        {/* partial:index.partial.html */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <title>homepage</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet" />
        <div className="container">
          <p style={{ backgroundImage: 'url("https://i.postimg.cc/zBHgmGvK/bg.png")' }}>
          </p><div className="responsive-bar">
            <h6 className="brand"><a href="#"><img className="logo" src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
            <h4 className="menu"><img classname="nav" src="https://i.postimg.cc/J499N6Vq/nav.png" /></h4>
            <div style={{ clear: 'both' }} />
          </div>
          <nav>
            <h6 className="brand"><a href="#"><img src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Medicine</a></li>
              <li><a href="#">Tests</a></li>
              <li><a href="#">Appointments</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
            <div style={{ clear: 'both' }} />
          </nav>
          <div className="content">
            <div className="content-inner">
              <button className="voice"><a href='#'><img src="https://i.postimg.cc/44pLCJrz/voice.png" /></a></button></div>

            <button className="emergency"><p><a href='#'>Emergency</a></p></button>
          </div>
        </div>
        {/* partial */}
      </div>

    );
  }
}

export default HomepagePatient;

