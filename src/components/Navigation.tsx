import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  toggleMenu() {
    const navs = document.querySelectorAll('.navbar__items');
    navs.forEach(nav => nav.classList.toggle('navbar__toggle--show'));

    const hamburger: any = document.querySelector('.navbar__link-toggle');
    hamburger.classList.toggle('navbar__toggle--open');
  }
  closeHamburgerMenu = () => {
    if (window.innerWidth <= 768) {
      this.toggleMenu();
    }
  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar__link navbar__link-brand">
          Queue Number Machine
        </div>
        <div
          className="navbar__link navbar__link-toggle"
          onClick={this.toggleMenu}
        >
          <div className="navbar__toggle-button" />
        </div>
        <nav className="navbar__items navbar__items--right">
          <NavLink
            to="/board"
            activeClassName="navbar__link--active"
            className="navbar__link"
            onClick={this.closeHamburgerMenu}
          >
            Board
          </NavLink>
          <NavLink
            to="/machine"
            activeClassName="navbar__link--active"
            className="navbar__link"
            onClick={this.closeHamburgerMenu}
          >
            Machine
          </NavLink>
          <NavLink
            to="/agent"
            activeClassName="navbar__link--active"
            className="navbar__link"
            onClick={this.closeHamburgerMenu}
          >
            Agent
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navigation;
