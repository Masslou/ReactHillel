import React from 'react';
import './App.css';
import Header from './components/common/Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Tables from '../src/components/tables/Tables'
import Waiters from "./components/waiters/Waiters";


function App() {

    return (
        <Router>
            <div className="container">
                <Header/>
                <Switch>
                    <Route path="/tables" component={Tables} />
                    <Route path="/waiters" component={Waiters} />
                    <Route path="*">
                        <Redirect to="/tables" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
