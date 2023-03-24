import React, {useState, useEffect} from "react";
import './homepage.scss';

function toNiceString(datetime){
  const date = new Date(datetime)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

function Blog(props){
  return(
      <div className={'blog'}>
          <a draggable="false" className={'blog-link'} href={`/blog/${props.id}`}>
              <div className={'blog-date'}>{toNiceString(props.date)}</div>
              <div className={'blog-category'}>{props.category}</div>
              <p className={'blog-title'}>{props.title}</p>
              <p className={'blog-desc'}>{props.desc}</p>
          </a>
      </div>
  );
}

function Homepage(){

  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState("all")

    useEffect(()=>{
        const url = `https://api.damocles.ca:8080/damocles/blogs/`;
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
        <div className={'homepage'} >
          <div className="category-container">
            <button active={"true"} value="all" className="category" onClick={handleClick}>All</button>
            <button active={"false"} value="videogames" className="category" onClick={handleClick}>Videogames</button>
            <button active={"false"} value="cybersec" className="category" onClick={handleClick}>Cyber Security</button>
            <button active={"false"} value="blog" className="category" onClick={handleClick}>Blog</button>
          </div>
          {
            posts.map((obj)=>{
              return(
                <Blog id={obj.id} title={obj.title} date={obj.createdon} category={obj.category} desc={obj.description}/>
              )
            })
          }
        </div>
    );

}

export default Homepage;