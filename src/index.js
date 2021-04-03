import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import './index.css';

function App(){
    return(
        <div>
            <Navbar/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);