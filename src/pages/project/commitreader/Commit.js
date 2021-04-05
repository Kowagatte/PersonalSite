import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function timeAgo(time){
    let date = new Date(Date.now() - Date.parse(time))
    if(date.getFullYear() > 1970){
        return (date.getFullYear()-1970) + " years ago"
    }else if(date.getMonth() > 0){
        return date.getMonth() + " months ago"
    }else if(Math.floor(date.getDate()/7) > 0){
        return Math.floor(date.getDate()/7) + " weeks ago"
    }else if(date.getDate > 0){
        return date.getDate() + " days ago"
    }else if(date.getHours() > 0){
        return date.getHours() + " hours ago"
    }else{
        return date.getMinutes() + " minutes ago"
    }
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
                    <img className={'commit-image'} src={this.props.image_url} style={{ maxWidth: "30px", maxHeight: "30px", paddingRight: "5px" }} alt={'avatar-image'}/>
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