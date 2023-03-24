import React from "react";
import "./aboutme.scss"
import firstImage from "../../res/aboutme/0.jpg"
import secondImage from "../../res/aboutme/1.jpg"
import thirdImage from "../../res/aboutme/2.jpg"

class AboutMe extends React.Component{

    render() {
        return(
            <div className={'about-me'}>
                <div className={'description'}>
                    <h1>
                        Who am I?
                    </h1>
                    <p>
                        My name is Nicholas Ryan<br/><br/>
                        I'm a Usask alumnus<br/>
                        And I tinker with computers
                    </p>
                </div>
                <img className={'img1'} alt={"Sleeping"} src={firstImage}/>
                <img className={'img2'} alt={"In Las Vegas"} src={secondImage}/>
                <img className={'img3'} alt={"Riding Stone Lizard"} src={thirdImage}/>

            </div>
            
        );
    }
}

export default AboutMe;