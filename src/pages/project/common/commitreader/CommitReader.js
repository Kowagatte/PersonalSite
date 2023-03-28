import React, {useState, useEffect} from "react";
import Commit from './Commit';
import './commitreader.scss';

function CommitReader(props){
    const [url, setURL] = useState(props.url)
    const [commits, setCommits] = useState([])

    useEffect(()=>{
        fetch(props.url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCommits(data)
        });
    }, [])

    return(
        <div className={props.class} id={'styled-scroll'}>
            <div className={'commit-title'}>
                {props.title} Github Commits
                <hr/>
            </div>
            {
                Object.keys(commits || {}).map((value, index) =>{
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
        </div>
    );
}

export default CommitReader;