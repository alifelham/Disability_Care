import './BookApp.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'



class BookApp extends Component {
    render() {
        if (this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }} />;
        }

        return (
            <div className='bg'>

                <div className='container'><PBook {...this.props} /></div>
            </div>

        );
    }
}

class PBook extends Component {

    constructor(props) {
        super(props);
    }

    /*
    hamburger(document) {
      var mainListDiv = document.getElementById("mainListDiv"),
          mediaButton = document.getElementById("mediaButton");
    
      mediaButton.onclick = function () {
    
          "use strict";
    
          mainListDiv.classList.toggle("show_list");
          mediaButton.classList.toggle("active");
      };
    }
    */


    render() {
        return (
            <div className='bvg'>
                <meta charSet="UTF-8" />
                <title>Patient Homepage</title>
                <link rel="stylesheet" href="./BookApp.css" />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link href='https://fonts.googleapis.com/css?family=Readex Pro' rel='stylesheet'></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link href="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></link>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></link>
                <div className="container">
                    <p style={{ backgroundImage: 'url("https://i.postimg.cc/zBHgmGvK/bg.png")' }}>
                    </p><div className="responsive-bar">
                        <h6 className="brand"><a href="#"><img className="logo" src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
                        <h4 className="menu"><img classname="nav" src="https://i.postimg.cc/J499N6Vq/nav.png" /></h4>
                        <div style={{ clear: 'both' }} />
                    </div>
                    {/*} <div class="hamburger"><hamburgeroption {...this.props} />
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
    </div>*/}
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
                    <div className='consult-container'>
                        <div className="container5">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="text-center my-4">
                                        Find Consultations
                                    </h2>
                                    <form>
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-lg-4">
                                                Date
                                            </label>
                                            <div className="col-sm-8 col-lg-8">
                                                <input type="date" id="date" className="form-control" />
                                            </div>
                                        </div>
                                        {/**/}
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-lg-4">
                                                Time
                                            </label>
                                            <div className="col-sm-8 col-lg-8">
                                                <input type="time" id="time" className="form-control" />
                                            </div>
                                        </div>
                                        {/**/}
                                        <div className="form-group row">
                                            <label className="col-sm-4 col-lg-4">
                                                Symptoms
                                            </label>
                                            <div className="col-sm-8 col-lg-8">
                                                <textarea id="symptoms" className="form-control" required defaultValue={""} />
                                            </div>

                                            <div className="form-group row justify-content-end">
                                            <div className="col-sm-5">
                                                <button color="white" className="btn btn-form">
                                                    <a href = "/appsch">Confirm</a>
                                                </button>
                                            </div>
                                        </div>
                                        </div>
                                        {/**/}
                                        
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <h2 id="services" className="text-center my-4" />
                                    <ul id="consultations" className="list-group" />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        );
    }
}

export default BookApp;