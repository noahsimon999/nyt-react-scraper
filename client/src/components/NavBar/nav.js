import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./nav.css";

class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        <div>
            <nav className="blue darken-4">
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#" className="brand-logo center customNav">New York Times Scrubber</a></li>
                        <li><a onClick={()=>window.location.replace("/")} className="text-decoration">Home</a></li>
                        <li><NavLink to="/saved" className="text-decoration">Saved</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    }
}