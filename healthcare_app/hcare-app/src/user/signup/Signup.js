import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../constants';
import { signup } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import './signupp.css'

class Signup extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/profile",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className='bg'>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'></link>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' />
                <link rel='stylesheet' href='./Signupp.css' />
                <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js'></script>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.11.0/umd/react-dom.production.min.js'></script><script src="./script.js"></script>
                
                <div className='container'><SignupForm {...this.props} /></div>
            </div>


        );
    }
}

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            confirm_pass: ''
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

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
            .then(response => {
                this.props.history.push("/login")
                Alert.success("You're successfully registered. Please login to continue!");
            }).catch(error => {
                if(signUpRequest.confirm_pass.localeCompare(signUpRequest.password) != 0)Alert.error((error && error.message) || "The passwords do not match! Please try again.");
                else Alert.error((error && error.message) || "The email is already in use. Please try again with a different one.");
            });
    }

    render() {
        return (
            <div className='form-box'>
                
                <div className="header-form">
                    <h4 className="text-center"><i style={{ color: "white", fontSize: "35px" }}>REGISTER</i></h4>
                    <div className="image">
                    </div>
                </div>

                <div className="body-form">

                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                        </div>
                        <input name = "email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                        </div>
                        <input name = "name" type="name" className="form-control" placeholder="Full Name" value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-lock"></i></span>
                        </div>
                        <input name = "password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-lock"></i></span>
                        </div>
                        <input name = "confirm_pass" type="password" className="form-control" placeholder="Confirm Password" value={this.state.confirm_pass} onChange={this.handleInputChange} />
                    </div>
                    <div className="SignupButton">
                        <button type="submit" className="btn btn-secondary btn-block">SIGNUP</button>
                    </div>

                    <div className="message">
                        <div><a href="/login">Already have an account? LOGIN</a>
                        </div>
                    </div>
                    <div className='or'>
                        <a>------------ OR USE ------------</a>
                    </div>
                    <div className="social">
                        
                        <a href={GOOGLE_AUTH_URL}><i className="fab fa-google"></i></a>
                        <a href={FACEBOOK_AUTH_URL}><i className="fab fa-facebook"></i></a>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Signup