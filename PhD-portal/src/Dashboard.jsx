import React from "react";
import ButtonLink from "./ButtonLink.jsx";
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
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
        <ButtonLink classname="logout-button" to = "/">Sign out</ButtonLink>
      </nav>
      <main className="content">
        <nav className="navbar">
            <h1>Student Dashboard</h1>
            <div class="rightNav">
                <ButtonLink classname="btn"><FontAwesomeIcon icon= {faBell} /></ButtonLink>
                <ButtonLink classname="btn"><FontAwesomeIcon icon= {faCaretDown} /></ButtonLink>
                <ButtonLink to = "/profile" classname="btn"><FontAwesomeIcon icon= {faUser} /></ButtonLink>
            </div>
        </nav>    
            <div className="notice-board">
                <h2>Notice Board</h2>
                <p>Opportunities and updates will be displayed here.</p>
            </div>
            <div className = "flex-container">
                <div className = "column1">
                <div className = "thesis-section">
                    <h2>Thesis</h2>
                    <ul>
                        <li>Thesis Title: Draft 1</li>
                        <li>Thesis Title: Draft 2</li>
                    </ul>
                </div>
                <div className="progress-report">
                    <h2>Progress Report</h2>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className = "column2">
                <div className="mentors">
                <h2>Mentors</h2>
                <ul>
                    <li>Teacher1</li>
                    <li>Teacher2</li>
                    <li>Mr. Vaibhav Vasani</li>
                </ul>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
