import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './components/Home'
import Groups from "./components/groups/Groups";
import Students from "./components/students/Students";
import Header from "./components/Header";

export default function App(props) {
    return (

        <Router>
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/groups'>
                        <Groups/>
                    </Route>
                    <Route path='/students'>
                        <Students/>
                    </Route>
                    <Route path='*'>
                        <Redirect to={'/home'}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

App.propTypes = {};
