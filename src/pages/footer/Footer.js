import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from './footer-icons';
import './footer.css'

class Icon extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            icon: null,
            href: null,
        };
    }

    render() {
        return(
            <a className={'icon'} href={this.props.href}>
                <FontAwesomeIcon icon={this.props.icon}/>
            </a>
        );
    }
}

class Footer extends React.Component{
    render(){
        return(
            <div className={"footer"}>

                <div className={'fontAwesomeIcons'}>
                    {
                        Object.keys(icons).map((key, index)=>{
                            return <Icon href={icons[key].href} icon={icons[key].icon}/>
                        })
                    }
                </div>
                <ul className={'footer-notes'}>
                    <li id={'id-tag'} className={'footer-notes'}>Nicholas N Ryan</li>
                    <li className={'footer-notes'}>•</li>
                    <li id={'id-tag'} className={'footer-notes'}>2019-2022</li>
                    <li className={'footer-notes'}>•</li>
                    <li className={'footer-notes'}><a href={'https://damocles.ca'}>damocles.ca</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;