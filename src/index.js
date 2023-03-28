import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import './index.scss';
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import RaymondPage from "./pages/project/raymond/RaymondPage";
import TopDownShooterPage from "./pages/project/topdownshooter/TopDownShooterPage";
import AboutMe from "./pages/aboutme/AboutMe";
import Collection from "./pages/collection/Collection";
import Homepage from "./pages/blog/Homepage";
import BlogPage from "./pages/blog/BlogPage";

function App(){
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar/>
            <div id={'container'}>
                <Switch>
                    <Route path={'/am'}>
                        <AboutMe/>
                        <Footer/>
                    </Route>
                    <Route path={'/collection'}>
                        <Collection/>
                    </Route>
                    <Route path={'/p/raymond'}>
                        <RaymondPage/>
                    </Route>
                    <Route path={'/p/tds'}>
                        <TopDownShooterPage/>
                    </Route>
                    <Route path={'/blog/:id'} component={BlogPage}/>
                </Switch>
            </div>
            <Route exact path={'/'}>
                <Homepage/>
                <Footer/>
            </Route>
        </Router>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);