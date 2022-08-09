import React, { Component } from 'react';
import './login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if (this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }

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
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'></link>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' />
                <link rel='stylesheet' href='./login.css' />
                <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js'></script>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.11.0/umd/react-dom.production.min.js'></script><script src="./script.js"></script>

                <div className='container'><LoginForm {...this.props} /></div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
            .then(response => {
                console.log("Access token is" + response.accessToken);
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                this.props.history.push("/profile");
            }).catch(error => {
                console.log("Access token is" + loginRequest.accessToken);
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    render() {
        return (
            <div className='form-box'>

                <div className="header-form">
                    <h4 className="text-center"><i style={{ color: "white", fontSize: "35px" }}>LOG IN</i></h4>
                </div>

                <div className="body-form">

                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input name="email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                            </div>
                            <input name="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <div className="SignupButton">
                            <button type="submit" className="btn btn-secondary btn-block">SIGN IN</button>
                        </div>
                        <div className="message">
                            <div><input type="checkbox" /> Remember ME</div>
                            <div><a href="#">Forgot Password</a></div>
                        </div>
                        <div className='or'>
                            <a>------------ OR USE ------------</a>
                        </div>
                        <div className="social">
                            <a href={FACEBOOK_AUTH_URL}><i className="fab fa-facebook"></i></a>
                            <a href={GOOGLE_AUTH_URL}><i className="fab fa-google"></i></a>
                        </div>
                        <div className="SignupMessage">
                            <div><a href="/signup">Don't have an account? SIGNUP</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login
