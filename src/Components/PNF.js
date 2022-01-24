import React from 'react'
import { NavLink } from 'react-router-dom'
 import "./PNF.css";
const PNF = () => {
    return (
      <div className="body1">
        <div className="container">
          <div className="content">
          <h2>404</h2>
          <h4>Opps! Page not found</h4>
          <p>The page you are looking for doesn't exist.</p>
          <NavLink to="/" className="mainnn">back to home</NavLink>
          </div> 
        </div>
        </div>
    )
}

export default PNF
