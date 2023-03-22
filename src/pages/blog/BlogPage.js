import React, {useState, useEffect} from "react";
import Blog from './Blog';
import './blog-page.scss';


function BlogPage(props){

  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState("all")

    useEffect(()=>{
        const url = `http://api.damocles.ca:8080/damocles/blogs/`;
        return fetch(url)
        .then((response) => response.json())
        .then(responseJson => {
          setPosts(responseJson)
        })
        .catch(setPosts([]));
    }, []);

    const handleClick = (e) => {
      e.preventDefault();
      setCategory(e.target.value);

      const buttons = document.getElementsByClassName('category')
      for(let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute('active', 'false')
      }

      e.target.setAttribute('active', 'true')
    }

    return(
        <div className={'blog-page'} >
          <div className="category-container">
            <button active={"true"} value="all" className="category" onClick={handleClick}>All</button>
            <button active={"false"} value="videogames" className="category" onClick={handleClick}>Videogames</button>
            <button active={"false"} value="cybersec" className="category" onClick={handleClick}>Cyber Security</button>
            <button active={"false"} value="blog" className="category" onClick={handleClick}>Blog</button>
          </div>
          {
            posts.map((obj)=>{
              return(
                <Blog title={obj.title} date={obj.createdon} category={obj.category} desc={obj.description}/>
              )
            })
          }
        </div>
    );

}

export default BlogPage;