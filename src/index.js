import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './index.css';

export const Beverage = () => (
    <div id={"font-awesome"}>
        Your <FontAwesomeIcon icon={faCoffee}/> is hot and ready!
    </div>
)

class MainPage extends React.Component{
    render() {
        return(
            <div>
                <Navbar/>
                <Beverage/>
                <Footer/>
            </div>
        );
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <div className="top-navbar">
                <div className="navbar-header"><a href={'/'}>Damocles</a></div>
                <ul className="navbar-objects">
                    <li className="navbar-objects"><a href={'https://github.com/Kowagatte'}>Github</a></li>
                    <li className="navbar-objects"><a href={'/am/'}>About Me</a></li>
                    <li className="navbar-objects"><a href={'/p/'}>Projects</a></li>
                    <li className="navbar-objects"><a href={'/d/'}>Devlog</a></li>
                </ul>
            </div>
        );
    }
}

class Footer extends React.Component{
    render(){
        return(
          <div className={"footer"}>
              <ul className={'footer-notes'}>
                  <li id={'id-tag'} className={'footer-notes'}>Nicholas N Ryan</li>
                  <li className={'footer-notes'}>•</li>
                  <li id={'id-tag'} className={'footer-notes'}>2019-2021</li>
                  <li className={'footer-notes'}>•</li>
                  <li className={'footer-notes'}><a href={'https://damocles.ca'}>damocles.ca</a></li>
              </ul>
          </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <MainPage/>,
    document.getElementById('root')
);