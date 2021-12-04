import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Navigation(props) {
    return (
        <div className="Navigation">
            <NavLink activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink activeClassName="social" to="/social">
                Social
            </NavLink>
            <NavLink activeClassName="projects" to="/projects">
                Projects
            </NavLink>
            <NavLink activeClassName="active" to="/about">
                About
            </NavLink>


        </div>
    );
}

export default Navigation;