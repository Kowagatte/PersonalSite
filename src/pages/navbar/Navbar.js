import React from "react";
import './navbar.css';
import { icons } from './Navbar-Icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="top-navbar">
                <div className="navbar-header"><Link to={'/'}>Damocles</Link></div>
                <ul className="navbar-objects">
                    {
                        Object.keys(icons).map((key, index)=>{
                            return <li className={'navbar-objects'}>
                                <Link to={icons[key].href}>
                                    <FontAwesomeIcon className={'navbar-objects'} icon={icons[key].icon}/>
                                    <div className={'navText'}>
                                        {key}
                                    </div>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Navbar;