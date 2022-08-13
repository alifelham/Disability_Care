import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';


/* SYSTEM COMPONENTS */
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';

/* PATIENT COMPONENTS */
import HomepagePatient from '../phome/HomepagePatient';

/* HOSPITAL COMPONENTS */
import HospitalProfile from '../Hospital/Profile/HospitalProfile';
import AppointmentReq from '../Hospital/RequestedAppointments/Appointment';
import Appointment from '../Hospital/Appointments/Appointment';
import AvailableDoctors from '../Hospital/Doctors/availableDoctors';

/* PHARMACY COMPONENTS */
import MedRequest from '../Pharmacy/MedicineRequests/MedRequest';
import MedDelivery from '../Pharmacy/MedicineDelivery/MedDelivery';
import PharmaProfile from '../Pharmacy/PharmaProfile/PharmaProfile';

/* DOCTOR COMPONENTS */
import Profile from '../user/doctor/profile/Profile';
import DocAppointment from '../Doctor/Appointments/DocAppointment';

/* DIAGNOSTIC CENTER COMPONENTS */




class App extends Component {
  constructor(props) {
    super(props);
    console.log(props.ACCESS_TOKEN);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
    .then(response => {
      console.log(response);
      
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      })
      
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    
    console.log("In compp");
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    else return (
      <div className="app">
          <Switch>

            {/* PATIENT ROUTES*/}
            <Route exact path="/" component={Home} ></Route>           
            <Route path="/profile" 
              render={(props) => <Profile authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route>
            

            {/* HOSPITAL ROUTES*/}
            <Route path="/hprofile" 
              render={(props) => <HospitalProfile authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route> 
            <Route path="/appreq" 
              render={(props) => <AppointmentReq authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route>
            <Route path="/app" 
              render={(props) => <Appointment authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route>
             <Route path="/avdoc" 
              render={(props) => <AvailableDoctors authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route>
            

            {/* PHARMACY ROUTES*/}
            <Route path="/medreq" 
              render={(props) => <MedRequest authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route> 
            <Route path="/meddelivery" 
              render={(props) => <MedDelivery authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route> 
               <Route path="/pharmaprofile" 
              render={(props) => <PharmaProfile authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route> 
            
            {/* DOCTOR ROUTES*/}
            <Route path="/docapp" 
              render={(props) => <DocAppointment authenticated={this.state.authenticated} currentUser = {this.state.currentUser} onLogout = {this.handleLogout} {...props} />}></Route> 
            


            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/phome"
              render={(props) => <HomepagePatient authenticated={this.state.authenticated} onLogout = {this.handleLogout} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            <Route component={NotFound}></Route>
          </Switch>
        
        <Alert stack={{limit: 3}} 
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default App;
