import React from "react";
import Commit from './Commit';
import './commitreader.css';

function getCommits(){
    let url = "https://api.github.com/repos/Kowagatte/TDClient/commits";
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText)
}

class CommitReader extends React.Component{
    render(){
        let commits = getCommits();
        return(
                <div className={'git-commits'}>
                    {
                        Object.keys(commits).map((value, index) =>{
                            return <Commit
                                author={commits[index].commit.author.name}
                                date={commits[index].commit.author.date}
                                message={commits[index].commit.message}
                                url={commits[index].html_url}
                            />
                        })
                    }
                </div>
        );
    }
}

export default CommitReader;