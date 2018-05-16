import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props)=>{
  return (
      <header>
        <NavLink exact to="/" activeClassName='active'>
          Home
        </NavLink>
        <NavLink exact to="/clients" activeClassName='active'>
          Clients
        </NavLink>
        <NavLink  to="/workers" activeClassName='active'>
          Workers
        </NavLink>
        <NavLink exact to="/services" activeClassName='active'>
          Services
        </NavLink>
        <NavLink exact to="/settings" activeClassName='active'>
          Settings
        </NavLink>
      </header>
  );
};
export default Header