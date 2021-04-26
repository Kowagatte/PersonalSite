import React from "react";
import './navbar.scss';
import { icons } from './Navbar-Icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import {
    Dropdown,
    DropdownButton
} from "react-bootstrap";
import Logo from '../../res/logo.svg'

class Navbar extends React.Component {
    render() {
        return (
            <div className="top-navbar">
                <div className="navbar-header">
                    <img className={'damocles-logo'} src={Logo} alt={'Damocles logo'}/>
                    <Link to={'/'}>Damocles</Link>
                </div>

                {/* TODO clean this shit up, very fucking ugly */}
                {
                    Object.keys(icons).map((key, index)=>{
                        if(icons[key].items != null){
                            return <DropdownButton
                                className={'navbar dropdown-toggle btn btn-primary'}
                                id="dropdown-basic-button"
                                title={
                                    <div>
                                        <FontAwesomeIcon className={'navbar-objects'} icon={icons[key].icon}/>
                                        <div className={'navText'}>{key}</div>
                                    </div>
                                }>
                                    {
                                        Object.keys(icons[key].items).map((subKey)=>{
                                            return <LinkContainer to={icons[key].items[subKey].href}>
                                                <Dropdown.Item>{subKey}</Dropdown.Item>
                                            </LinkContainer>
                                        })
                                    }
                            </DropdownButton>
                        }else{
                            return <div className={'navbar-objects'}>
                                <Link to={icons[key].href}>
                                    <FontAwesomeIcon className={'navbar-objects'} icon={icons[key].icon}/>
                                    <div className={'navText'}>
                                        {key}
                                    </div>
                                </Link>
                            </div>
                        }

                    })
                }
            </div>
        );
    }
}

export default Navbar;