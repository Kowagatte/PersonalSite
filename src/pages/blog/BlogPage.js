import React, {useState, useEffect} from "react";
import Markdown from 'marked-react'
import './blog-page.scss';

function BlogPage(props){
    const [page, setPage] = useState(null)

    useEffect(()=>{
        fetch(`http://api.damocles.ca:8080/damocles/blog/${props.match.params.id}`).then(response=>{
            return response.text()
        })
        .then(text =>{
            setPage(text)
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    if(page != null){
        return(
            <div className={'blog-page'}>
                <Markdown>
                    {page}
                </Markdown>
            </div>
        )
    }else{
        return(<div>No page found</div>)
    }

}

export default BlogPage;