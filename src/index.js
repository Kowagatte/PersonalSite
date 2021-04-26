import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import './index.css';
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import DamoclesPage from "./pages/project/damocles/DamoclesPage";
import RaymondPage from "./pages/project/raymond/RaymondPage";
import TopDownShooterPage from "./pages/project/topdownshooter/TopDownShooterPage";

function App(){
    return(
        <Router>
            <Navbar/>
            <div id={'container'}>
                <Switch>
                    <Route path={'/p/damocles'}>
                        <DamoclesPage/>
                    </Route>
                    <Route path={'/p/raymond'}>
                        <RaymondPage/>
                    </Route>
                    <Route path={'/p/tds'}>
                        <TopDownShooterPage/>
                    </Route>
                </Switch>
            </div>
            <Route exact path={'/'}>
                <Footer/>
            </Route>
        </Router>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);