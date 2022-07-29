import React from 'react';
import './signup.css'





function SignUp() {
    return (
        <div>

            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'></link>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' />
            <link rel="stylesheet" href="./signup.css" />

            <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js'></script>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.11.0/umd/react-dom.production.min.js'></script><script src="./script.js"></script>

            <div className="container">




                <div className="form-box">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
                            <div className="message">
                                <div><input type="checkbox" /> Remember ME</div>
                                <div><a href="#">Forgot your password</a></div>
                            </div>
                        </form>
                        <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp;