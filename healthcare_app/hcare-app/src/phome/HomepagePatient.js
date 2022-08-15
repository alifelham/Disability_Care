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


          
               <nav className="navb">
                        <h6 className="brand"><a href="#"><img src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
                        <div className="main_list" id="mainListDiv">
                            <ul>
                                <li class="box"><a href="/phome">Home</a></li>
                                <li class="box"><a href="/pmeds">Medicine</a></li>
                                <li class="box"><a href="/ptests">Tests</a></li>
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

                    <div className="p-container">
          
        
            <div className="dropdown-2">
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
      <li>Wash your hands or put on disposable gloves if you have them. This will protect you from infectious diseases like viral hepatitis and HIV/AIDS that can be spread in a person’s blood.6
Rinse the wound with water.</li>
<li>Cover the wound with a gauze or cloth (e.g., towel, blanket, clothing).
</li>
<li>Apply direct pressure to stop the flow of blood and encourage clotting (when blood naturally thickens to stop blood loss).
</li>
<li>Elevate the bleeding body part above the person’s head if you can.
</li></ol>

    </div>
  </div>

</div>
                <a href="#">Doctor</a>
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



