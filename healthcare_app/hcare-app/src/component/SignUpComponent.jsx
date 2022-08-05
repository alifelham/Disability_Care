import React from 'react';
import './signup.css'



function SignUp() {


    return (


        <div className='bg'>


            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'></link>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' />
            <link rel="stylesheet" href="./signup.css" />

            <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js'></script>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.11.0/umd/react-dom.production.min.js'></script><script src="./script.js"></script>

            <div className="container">

   



                <div className="form-box">

                    <div className="header-form">
                        <h4 className="text-center"><i  style={{color:"white", fontSize: "40px" }}>HEALTHCARE</i></h4>
                        <div className="image">
                        </div>
                    </div>


                    <div className="body-form">

                    <section>
                    <select class="selectColor" onchange="changeColor(this)">
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Hospital Admin">Hospital Admin</option>
                        <option value="Hospital Admin">Diagnostic Center</option>
                        <option value="Pharmacy">Pharmacy</option>
                    </select>
                </section>

                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder=" Confirm Password" />
                            </div>
                            <div className = "SignupButton">
                            <button type="button" className="btn btn-secondary btn-block">SIGNUP</button>
                            </div>
            
                            <div className="message">
                                <div><a href="/login">Already have an account? LOGIN</a>
                                </div>
                            </div>
                            <div className='or'>
                            <a>------------ OR USE ------------</a>
                            </div>
                            <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;