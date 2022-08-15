/*import React from 'react'; */
import './DigitalPrescription.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'




class DigitalPrescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Med: '',
            totalDose: '',
            Ins: '',
            test: '',
            instruction:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        
    }



    render() {

        <script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js">


        </script>

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

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link href='https://fonts.googleapis.com/css?family=Readex Pro' rel='stylesheet'></link>


                <nav className="navb">
                    <h6 className="brand"><a href="#"><img src="https://i.postimg.cc/Y2RVP2ch/logo.png" /></a></h6>
                    <div className="main_list" id="mainListDiv">
                        <ul>
                            <li class="box"><a href="/dochome">Home</a></li>
                            <li class="box"><a href="/docapp">Appointments</a></li>
                            <li class="box"><a href="/folpat">Followup Patients</a></li>
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

                <div class="wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div class="prescription_form">
                        <table class="prescription" data-prescription_id="<?php echo $presc->prescription_id; ?>" border="1">
                            <tbody>
                                <tr height="15%">
                                    <td colspan="2">
                                        <div class="header">
                                            <div class="logo">
                                                <img
                                                    src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png" />
                                            </div>
                                            <div class="credentials">
                                                <h4>Doctor Name</h4>
                                                <p>Chamber Name</p>
                                                <small>Adress</small>
                                                <br />
                                                <small>Mb. 0XXXXXXXXX</small>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">
                                        <div class="desease_details">
                                            <div class="symptoms">
                                                <h4 class="d-header">Symptoms</h4>
                                                <ul class="symp" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                                                    contenteditable="true">
                                                </ul>
                                                <div class="symp_action">
                                                    <button id="symp_save" data-prescription_id="<?php echo $presc->prescription_id; ?>" class="btn btn-sm btn-success save">Save</button>
                                                    <button class="btn btn-sm btn-danger cancel-btn">Cancel</button>
                                                </div>
                                            </div>
                                            <div class="tests">
                                                <h4 class="d-header">Tests</h4>
                                                <ul class="tst" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                                                    contenteditable="true">
                                                    <input name = "test" type="test" placeholder="Give Test"  onChange={this.handleInputChange} />
                                                    <input name = "instruction" type="instruction" placeholder="Instructions"  onChange={this.handleInputChange} />
                                                    <button type='submit'>Add</button>
                                                </ul>
                                                <div class="test_action">
                                                    <button id="test_save" data-prescription_id="<?php echo $presc->prescription_id; ?>" class="btn btn-sm btn-success save">Save</button>
                                                    <button class="btn btn-sm btn-danger cancel-btn">Cancel</button>
                                                </div>
                                            </div>
                                            <div class="advice">
                                                <h4 class="d-header">Advice</h4>
                                                <p class="adv_text" data-toggle="tooltip"
                                                    data-placement="bottom" title="Click to edit." contenteditable="true">
                                                </p>
                                                <div class="adv_action">
                                                    <button id="adv_save" data-prescription_id="<?php echo $presc->prescription_id; ?>" class="btn btn-sm btn-success save">Save</button>
                                                    <button class="btn btn-sm btn-danger cancel-btn">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td width="60%" valign="top">
                                        <span className="RX" >R<sub>x</sub></span>
                                        <hr />
                                        <div class="medicine">
                                            <section class="med_list">
                                            <input name = "Med" type="Med" placeholder="Give Med"  onChange={this.handleInputChange} />
                                            <input name = "Ins" type="Ins" placeholder="Dose Per Day"  onChange={this.handleInputChange} />
                                            <input name = "totalDose" type="totalDose" placeholder="TotalDose"  onChange={this.handleInputChange} />
                                            </section>
                                            <button type='submit'>Add</button>
                                            <div id="add_med" data-toggle="tooltip" data-placement="right"
                                                title="Click anywhere on the blank space to add more.">Click to add...</div>
                                                
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="button_group">
                            <button class="issue_prescription btn btn-success">Issue</button>
                            <button class="pdf_prescription btn btn-danger">PDF</button>
                        </div>
                        <div id="snacking">Saving...</div>
                        <div id="snacked">Saved!</div>
                    </div>
                    </form>
                </div>
                
                <script id="new_medicine" type="text/template">
                    <div class="med">
                        &#9899; <input class="med_name" data-med_id="{{med_id}}" data-toggle="tooltip"
                            title="Click to edit..." placeholder="Enter medicine name" />
                        <div class="med_name_action">
                            <button data-med_id="{{med_id}}" class="btn btn-sm btn-success save">Save</button>
                            <button class="btn btn-sm btn-danger cancel-btn">Cancel</button>
                        </div>
                        <div class="schedual">
                            <div class="sc_time folded">
                                <select class="sc" data-med_id="{{med_id}}">
                                    <option value="1+1+1" selected>1+1+1</option>
                                    <option value="1+0+1">1+0+1</option>
                                    <option value="0+1+1">1+1+1</option>
                                    <option value="1+0+0">1+1+1</option>
                                    <option value="0+0+1">1+1+1</option>
                                    <option value="1+1+1+1">1+1+1+1</option>
                                </select>
                                <div class="med_when_action">
                                    <button data-med_id="{{med_id}}"
                                        class="btn btn-sm btn-success save">&check;</button>
                                </div>
                            </div>
                            <div class="taking_time select folded">
                                <select class="meal" data-med_id="{{med_id}}">
                                    <option value="1" selected>After Meal</option>
                                    <option value="2">Before Meal</option>
                                    <option value="3">Take any time</option>
                                </select>
                                <div class="med_meal_action">
                                    <button data-med_id="{{med_id}}"
                                        class="btn btn-sm btn-success save">&check;</button>
                                </div>
                            </div>
                        </div>
                        <div class="med_footer">
                            <div class="period folded">
                                Take for <input class="med_period" type="text" data-med_id="{{med_id}}"
                                    placeholder="? days/weeks..." />
                                <div class="med_period_action">
                                    <button data-med_id="{{med_id}}"
                                        class="btn btn-sm btn-success save">&check;</button>
                                </div>
                                <span class="date"></span>
                            </div>
                            <div class="del_action">
                                <button data-med_id="{{med_id}}" class="btn btn-sm btn-danger delete"><i class="fa fa-trash"
                                    aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <hr />
                    </div>
                </script>
            </div>
        )
    }
}

export default DigitalPrescription;


