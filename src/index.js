import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import CommitReader from "./pages/project/commitreader/CommitReader";
import './index.css';
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App(){
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path={"/p"}>
                    <CommitReader url={'https://api.github.com/repos/Kowagatte/Damocles-Client/commits'}/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);