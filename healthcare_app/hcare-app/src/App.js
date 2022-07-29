import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpComponent from './component/SignUpComponent'
//import SignUpComponent from './component/SignUpComponent'
import './App.css';
import Navbar from './component/Navbar';
import { ReactComponent as Calendar } from "./icons/calendar-date.svg";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/signup' element={
          < SignUpComponent>
          </SignUpComponent>}>
        </Route>
        <Route exact path='/nav' element={
          <div>
            < Navbar>
              <NavItem icon={<Calendar />} />
              <NavItem icon={<Calendar />} />
              <NavItem icon={<Calendar />}>
                <p>Hello</p>
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
      <a href='/signup' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}

    </li>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {

    return (
      <a href='#' className='dropdown-item'>
        {props.children}
      </a>
    );
  }

  return (
    <div className='dropdown'>

    </div>
  );
}

export default App;
