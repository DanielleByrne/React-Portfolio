import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div class="container">
        <div class="row top-div"></div>
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <h1>About Me</h1>
              <hr />
              <img
                class="about-image"
                src="assets/About Image.jpeg"
                alt="placeholder"
              />
              <p>
                Hello! My Name is Danielle Byrne. I grew up in Las Vegas, Nevada
                and am 25 years old. I went to the University of Nevada and got
                a Bachelors degree in Psychology. After college I worked for a
                year before deciding to move to Atlanta, GA. Once I got to
                Atlanta I knew I wanted to start a career in development. I
                enrolled in the Georgia Tech Coding Bootcamp, of which I am
                currently a student. I look forward to kickstarting my
                development career!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
