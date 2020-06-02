import React from 'react'
import { Link } from 'react-router-dom'

function Navigator() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler navbar-toggler-right" type="button"
        data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-brand">Personal Trainer App</div>
      <div className="collapse navbar-collapse" id ="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Customers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/trainings">Trainings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calendar">Calendar</Link>
          </li>
        </ul>
      </div>
      <a href="https://github.com/pankaj-pant/personal-trainer-frontend" target="_blank" className="nav-link">Help?</a>
    </nav>
  )
}

export default Navigator