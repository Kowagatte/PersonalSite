import React from "react";
import Commit from './Commit';
import './commitreader.css';

function getCommits(url){
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText)
}

class CommitReader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url: null
        }
    }
    render(){
        let commits = getCommits(this.props.url);
        return(
                <div className={'git-commits'}>
                    <br/>
                    {
                        Object.keys(commits).map((value, index) =>{
                            return <Commit
                                author={commits[index].commit.author.name}
                                author_link={commits[index].author.html_url}
                                image_url={commits[index].author.avatar_url}
                                date={commits[index].commit.author.date}
                                message={commits[index].commit.message}
                                url={commits[index].html_url}
                            />
                        })
                    }
                    <br/>
                </div>
        );
    }
}

export default CommitReader;