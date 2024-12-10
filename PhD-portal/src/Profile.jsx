import React from "react";
import "./Profile.css";
import profilePic from "./assets/profile-pic.png";
import ButtonLink from "./ButtonLink.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Dashboard from "./Dashboard.jsx";

function Profile() {
  return (
    <div className="profile">
      <nav className="sidebar">
        <h2>SOMAIYA</h2>
        <ul>
          <li><Link to = "/dashboard" className="sidebar-links">Dashboard</Link></li>
          <li>Thesis Feedback</li>
          <li>Thesis Details</li>
          <li>Comments</li>
          <li>Timeline</li>
          <li>Guidelines</li>
        </ul>
        <ButtonLink to = "/" classname="logout-button">Sign out</ButtonLink>
      </nav>
      <main className="content">
      <nav className="navbar">
            <h1>Student Profile</h1>
            <div className = "rightnav">
                <ButtonLink classname="btn"><FontAwesomeIcon icon= {faBell} /></ButtonLink>
                <ButtonLink classname="btn btn-arr"><FontAwesomeIcon icon= {faCaretDown} /></ButtonLink>
                <ButtonLink to = "/profile" classname="btn"><FontAwesomeIcon icon= {faUser} /></ButtonLink>
            </div>
        </nav>    
        <div className="flex-container1">
          <div className="profile-card elem">
            <div className="profile-card-flex">
              <div className = "profile-details">
                <h2>Rohit Sattendra Deshpande</h2>
                <p>First Year Ph.D. in Computer Engineering</p>
                <p>K J Somaiya College of Engineering</p>
                <p>1620220581 &emsp; rohit.sd@somaiya.edu &emsp; 8291692070</p>
              </div>
              <div className = "profile-pic-details">
                <img className = "profile-pic" src = {profilePic}/>
              </div>
          </div>
        </div>
        <div className="personal-details elem">
          <h2>Personal Details</h2>
        </div>
        <div className="fees elem">
          <h2>Fees</h2>
        </div>
        <div className="academic-summary elem">
          <h2>Academic Summary</h2>
        </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
