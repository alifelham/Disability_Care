/*import React from 'react'; */
import './HomepagePatient.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../constants';
import { login } from '../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';

class HomepagePatient extends Component {
  constructor(props) {
    super(props);
}

  render() {
    if(!localStorage.getItem(ACCESS_TOKEN)){
      return <Redirect
          to={{
          pathname: "/login",
          state: { from: this.props.location }
      }}/>;    
  }
    return (
      <div className='bg'>
        <meta charSet="UTF-8" />
        <title>Patient Homepage</title>
        <link rel="stylesheet" href="./HomepagePatient.css" />
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link href='https://fonts.googleapis.com/css?family=Readex Pro' rel='stylesheet'></link>
        <div className="container">
          <p style={{ backgroundImage: 'url("https://i.postimg.cc/zBHgmGvK/bg.png")' }}>
          </p><div className="responsive-bar">
            <h6 className="brand"><a href="#"><img className="logo" src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
            <h4 className="menu"><img classname="nav" src="https://i.postimg.cc/J499N6Vq/nav.png" /></h4>
            <div style={{ clear: 'both' }} />
          </div>
          {/*<div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
    </div> */}
          <nav className="navb">
            <h6 className="brand"><a href="#"><img src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
            <div className="main_list" id="mainListDiv">
              <ul>
                <li class="box"><a href="phome">Home</a></li>
                <li class="box"><a href="#">Medicine</a></li>
                <li class="box"><a href="#">Tests</a></li>
                <div className="dropdown">
                  <button className="dropbtn"><a href="#">Appointments</a></button>
                  <div className="dropdown-content">
                    <a href="#">Book </a>
                    <a href="#">Scheduled</a>
                  </div>
                </div>

                <li class="box"><a href="/profile">Profile</a></li>
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
          <div className="content">
            <div className="content-inner">
              <button className="voice"><a href='#'><img src="https://i.postimg.cc/44pLCJrz/voice.png" /></a></button>
            </div>
            <div className="dropdown">
              <button className="emergency"><a href="#">Emergency</a></button>

              <div class="dropdown-content">
                <a href="#">Ambulance </a>
                <a href="#">Doctor</a>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}
class hamburgeroption extends Component{
  constructor(props){
    super(props);
    this.hamburger =this.hamburger.bind(this);
  }



hamburger(document) {
  var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

  mediaButton.onclick = function () {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
  };
}
}
export default HomepagePatient;
{/*}

hamburgerfun(){
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
} */}



