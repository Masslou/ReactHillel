import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Groups from './components/groups/Groups';
import Students from './components/students/Students';
import Header from './components/Header';

export default function App() {
    return (

        <Router>
            <Header/>
            <div style={mainContent}>
                <Switch>
                    <Route exact path='/'>
                        <Groups/>
                    </Route>
                    <Route path='/groups'>
                        <Groups/>
                    </Route>
                    <Route path='/students'>
                        <Students/>
                    </Route>
                    <Route path='*'>
                        <Redirect to={'/groups'}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


const mainContent = {
  marginTop: '20px'
};
