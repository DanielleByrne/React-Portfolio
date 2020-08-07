import React, { Component } from "react";
import { Link } from "react-router-dom";

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="portfolio-row top-div"></div>
          <div className="card">
            <div className="card-body portfilio-card">
              <h1 className="card-title">Portfolio</h1>
              <hr />
              <div className="row">
                <ul className="list-unstyled">
                  <li className="media">
                    <div className="col-5">
                      <img
                        className="portfolio-image"
                        src="assets/monsTerra.png"
                        alt="staring page of the quiz"
                      />
                    </div>
                    <div className="col-7">
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">MonsTerra</h5>
                        <Link
                          href="https://github.com/DanielleByrne/MonsTerra"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repository
                        </Link>
                        <br />
                        <Link
                          href="https://agile-island-67083.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Deployed Application
                        </Link>
                        <br />
                      </div>
                    </div>
                  </li>
                  <li className="media my-4">
                    <div className="col-5">
                      <img
                        className="portfolio-image"
                        src="./assets/password_generated.jpeg"
                        alt="generated random password"
                      />
                    </div>
                    <div className="col-7">
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Random Password Generator</h5>
                        <Link
                          href="https://github.com/DanielleByrne/gt-password-generator-homework"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repository
                        </Link>
                        <br />
                        <Link
                          href="https://daniellebyrne.github.io/gt-password-generator-homework/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Deployed Application
                        </Link>
                        <br />
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <div className="col-5">
                      <img
                        className="portfolio-image"
                        src="./assets/RemoteIslandBeach.png"
                        alt="page of app on beach location"
                      />
                    </div>
                    <div className="col-7">
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Remote Location</h5>
                        <Link
                          href="https://github.com/DanielleByrne/gt-project-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repository
                        </Link>
                        <br />
                        <Link
                          href="https://jaredp17.github.io/gt-project-1/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Deployed Application
                        </Link>
                        <br />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="portfolio-row"></div>
        </div>
        <div className="footer"></div>
      </>
    );
  }
}

export default Portfolio;
