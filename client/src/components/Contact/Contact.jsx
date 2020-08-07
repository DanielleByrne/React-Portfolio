import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Contact.css"

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row top-div"></div>
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Contact Me</h1>
              <hr />
              <address className="contact-links">
                <p>Contact Phone Number : (702) 271-9255</p>
                <hr />
                <Link
                  href="mailto:DanielleByrne421@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DanielleByrne421@gmail.com
                </Link>
                <hr />
                <Link
                  href="https://www.linkedin.com/in/danielle-byrne-38a02413a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </Link>
                <hr />
                <a
                  href="https://github.com/DanielleByrne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <hr />
                <Link
                  href="assets/SoftwareDevelopmentResume.pdf"
                  target="_blank"
                >
                  View my Resume
                </Link>
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
