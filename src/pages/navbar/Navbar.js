import React from "react";
import './navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="top-navbar">
                <div className="navbar-header"><a href={'/'}>Damocles</a></div>
                <ul className="navbar-objects">
                    <li className="navbar-objects"><a href={'/am/'}>About Me</a></li>
                    <li className="navbar-objects"><a href={'/p/'}>Projects</a></li>
                    <li className="navbar-objects"><a href={'/d/'}>Devlog</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;