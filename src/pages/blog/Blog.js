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
            <a draggable="false" className={'blog-link'} href={'/b/test'}>
                <div className={'blog-date'}>{toNiceString(props.date)}</div>
                <div className={'blog-category'}>{props.category}</div>
                <p className={'blog-title'}>{props.title}</p>
                <p className={'blog-desc'}>{props.desc}</p>
            </a>
        </div>
    );
}

export default Blog;
