import React from "react";

function toNiceString(datetime){
    const date = new Date(datetime)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

function Blog(props){
    return(
        <div className={'blog'}>
            <div className={'blog-title'}>{props.title}</div>
            <div className={'blog-category'}>{props.category}</div>
            <div className={'blog-date'}>{toNiceString(props.date)}</div>
            <p className={'blog-desc'}>{props.desc}</p>
        </div>
    );
}

export default Blog;
