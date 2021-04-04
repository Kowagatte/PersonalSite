import React from "react";
import './commit.css';

class Commit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            author: null,
            date: null,
            message: null,
            verified: null,
            url: null
        }
    }

    render() {
        return(
            <p className={'commit'}>
                AuthorName: {this.props.author},
                <br/>
                Date Committed: {this.props.date},
                <br/>
                <p> {this.props.message} </p>
                <a href={this.props.url}>to github</a>
            </p>
        );
    }
}

export default Commit;