/*import React from 'react'; */
import './HomepagePatient.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../constants';
import { login } from '../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'

class HomepagePatient extends Component {
  constructor(props) {
    super(props);
    this.pop = this.pop.bind(this);
  }

  pop(document) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var ambulance = document.getElementById("ambulance");
    var doctor = document.getElementById("doc");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    ambulance.onclick = function () {
      modal.style.display = "block";
    }
    doctor.onclick = function () {
      modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
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

                </nav>
          <div className="content">
            <div className="content-inner">
              <button className="voice"><a href='#'><img src="https://i.postimg.cc/44pLCJrz/voice.png" /></a></button>
            </div>
            <div className='dropdown'>
              <div className='emg' onChange={this.pop}>

                <button className='emergency'>Emergency</button>
              </div>

              <div className='dropdown-content'>
                <button className='ambulance' id='ambulance' onclick='p'>Ambulance</button>
                <div id="myModal" className='modal'>


                  <div className="modal-content">
                    <img src="https://i.postimg.cc/zv1pdgz0/ambulancepng.png" />
                    <div className='modal-header'>
                      <span class="close">&times;</span>
                    </div>

                    <div className='modal-body'>
                      <h2>HELP IS ON THE WAY</h2>
                      <p>Follow the steps below: </p>
                      <ol>
                        <li>...</li>
                        <li>...</li>
                      </ol>

                    </div>
                  </div>

                </div>
                <button className="doctor" id="doc">Doctor</button>

                <div id="myModal" className="modal">


                  <div className='modal-content'>
                    <div className='doci'>
                      <img src="https://i.postimg.cc/k5mcqM0Z/doc.png" /> </div>
                    <div className='modal-header'>
                      <span class="close">&times;</span>
                    </div>

                    <div className='modal-body'>
                      <h1>WE ARE A FINDING A ADOCTOR FOR YOU!</h1>
                      <h4>WE WILL LET YOU KNOW SOON.</h4>

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}
export default HomepagePatient;


