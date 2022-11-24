import React from "react";
import "./aboutme.scss"
import firstImage from "../../res/aboutme/0.jpg"
import secondImage from "../../res/aboutme/1.jpg"
import thirdImage from "../../res/aboutme/2.jpg"

class AboutMe extends React.Component{

    render() {
        return(
            <div className={'about-me'}>
                <p>
                    Hello! My name is Nicholas Ryan.<br/><br/>
                    I am currently pursuing a degree in Computer Science at the University Of Saskatchewan.<br/> <br/>
                    I tinker a lot with Hacking and CyberSecurity, I currently work as an Intern Security Analyst at Cameco Corporation. My current career goals is to obtain CISSP and OSCP certification. Gain experience in Video-Game Hacking, Bug Hunting and Reverse Engineering. And, obtain a job in Video Game Security.<br/>
                    <br/>
                    My hobbies are; Making and playing Video-Games, Cooking, Collecting cards, Learning Japanese.
                </p>
                <img alt={"Sleeping"} src={firstImage}/>
                <img alt={"In Las Vegas"} src={secondImage}/>
                <img alt={"Riding Stone Lizard"} src={thirdImage}/>

            </div>
            
        );
    }
}

export default AboutMe;