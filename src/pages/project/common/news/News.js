import React from "react";
import "./news.scss";

class News extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date_posted: null,
            title: null,
            href: null
        }
    }

    render() {
        return(
            <a className={'news-wrapper'} href={this.props.href}>
                <div className={'news'}>
                    <div className={'news-date'}>{this.props.date_posted}</div>
                    <div className={'news-title'}>{this.props.title}</div>
                </div>
            </a>
        );
    }
}

export default News;