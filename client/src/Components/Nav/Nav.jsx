import React from 'react'
import "./Nav.css"
import logo from "../../Assets/logoo.png"
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <div className="navLeft">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/"/>Home</li>
                    <li><Link to="/"/>TV Shows</li>
                    <li><Link to="/"/>Movies</li>
                    <li><Link to="/"/>New & Popular</li>
                    <li><Link to="/"/>My List</li>
                    <li><Link to="/"/>Browse by Languages</li>
                </ul>
            </div>
        </div>
        <div className="navRight">
            <div className="searchIcon">Search</div>
            <div className="child">Children</div>
            <div className="bell">Bell</div>
            <div className="prof">Profile</div>
        </div>
    </nav>
  )
}

export default Nav