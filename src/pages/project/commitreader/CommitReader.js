import React from "react";
import Commit from './Commit';
import './commitreader.css';

const fetch = require("node-fetch")

class CommitReader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            commits: []
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => {
                this.setState({commits: data});
            });
    }

    render(){
        const { commits } = this.state;
        return(
            <div className={'git-commits'}>
                <p/>
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
                <p/>
            </div>
        );
    }
}

export default CommitReader;