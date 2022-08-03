import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpComponent from './component/SignUpComponent'
//import Login from './component/Login'
import './App.css';
import Navbar from './component/Navbar';
import { ReactComponent as Calendar } from "./icons/calendar-date.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as ProfileIcon } from "./icons/person.svg";
import { ReactComponent as SettingsIcon } from "./icons/gear.svg";
import { ReactComponent as CaretIcon } from "./icons/caret-down.svg";
import Appointments from './component/Appointments';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/signup' element={
          < SignUpComponent>
          </SignUpComponent>}>
        </Route>
       
        <Route exact path='/app' element={
          < Appointments>
          </Appointments>}>
        </Route>
        <Route exact path='/nav' element={
          <div>
            < Navbar>
              <NavItem icon={<Calendar />} />
              <NavItem icon={<Calendar />} />
              <NavItem icon={<CaretIcon />}>
              <DropdownMenu/>
              </NavItem>
            </Navbar>
            <h1>lorem ipsum</h1>
          </div>}>
        </Route>
      </Routes>
    </Router>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}

    </li>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {

    return (
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}

        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className='dropdown'>
      <DropdownItem
      leftIcon={<ProfileIcon/>}>
       profile </DropdownItem>
        <DropdownItem 
          leftIcon={<SettingsIcon/>}
          rightIcon={<BellIcon/>}>
          settings
        </DropdownItem>
    </div>
  );
}

export default App;
