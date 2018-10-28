import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

  toggleMenu() {
    console.log("toggle");
    const navs = document.querySelectorAll('.navbar__items');
    navs.forEach(nav => nav.classList.toggle('navbar__toggle--show'))
  }
  render() {

    return (
      <div className="navbar">
        <div className="navbar__link navbar__link-brand">
          Queue Number Machine
      </div>
        <div className="navbar__link navbar__link-toggle">
          <div className="navbar__toggle-button" onClick={this.toggleMenu}></div>
        </div>
        <nav className="navbar__items navbar__items--right">
          <NavLink to="/board" activeClassName="navbar__link--active" className="navbar__link">Board</NavLink>
          <NavLink to="/machine" activeClassName="navbar__link--active" className="navbar__link">Machine</NavLink>
          <NavLink to="/agent" activeClassName="navbar__link--active" className="navbar__link">Agent</NavLink>
        </nav>
      </div>

    );
  };
}

export default Navigation;