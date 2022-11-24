import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function timeAgo(githubTime){
    let milestones = [1000, 60000, 3600000, 86400000, 2592000000, 31104000000]
    let messages = ["seconds ago", "minutes ago", "hours ago", "days ago", "months ago"]

    let current = Date.now()
    let elapsed = current - Date.parse(githubTime)

    for(let i = 1; i< milestones.length; i++){
        if (elapsed < milestones[i]){
            return `${Math.floor(elapsed/milestones[i-1])} ${messages[i-1]}`
        }
    }
    return `${Math.floor(elapsed/31104000000)} years ago`
}

class Commit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            author: null,
            author_link: null,
            image_url: null,
            date: null,
            message: null,
            verified: null,
            url: null
        }
    }

    render() {
        return(
            <div className={'commit'}>
                <a className={'commit-name'} href={this.props.author_link}>
                    <img className={'commit-image'} src={this.props.image_url} style={{ maxWidth: "30px", maxHeight: "30px", paddingRight: "5px" }} alt={'avatar'}/>
                    {this.props.author}
                </a>
                <br/>
                <FontAwesomeIcon icon={faClock}/> {timeAgo(this.props.date)}
                <br/>
                <p> {this.props.message} </p>
                <a className={'commit-git'} href={this.props.url}>On <FontAwesomeIcon icon={faGithub}/></a>
                <hr/>
            </div>
        );
    }
}

export default Commit;