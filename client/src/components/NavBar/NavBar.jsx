import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Danielle Byrne
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/"className="nav-item nav-link active">
              About <span className="sr-only">(current)</span>
            </Link>
            <Link to="/Portfolio"className="nav-item nav-link">
              Portfolio
            </Link>
            <Link to="/Contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
