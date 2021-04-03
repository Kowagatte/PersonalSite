import React from "react";
import './navbar.css';
import { icons } from './Navbar-Icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
    render() {
        return (
            <div className="top-navbar">
                <div className="navbar-header"><a href={'/'}>Damocles</a></div>
                <ul className="navbar-objects">
                    {
                        Object.keys(icons).map((key, index)=>{
                            return <li className={'navbar-objects'}>
                                <a href={icons[key].href}>
                                    <FontAwesomeIcon className={'navbar-objects'} icon={icons[key].icon}/>
                                    <div className={'navText'}>
                                        {key}
                                    </div>
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Navbar;