import React, {useState, useEffect} from "react";
import ReactMarkdown from 'marked-react'
import { useParams } from "react-router-dom";

function BlogPage(props){
    const {param} = useParams()

    console.log(param)

    //const page = import(`../../res/pages${props.id}.md`)

    return(
        <div>
            {param}
        </div>
        //<ReactMarkdown source={page}></ReactMarkdown>
    );

}

export default BlogPage;