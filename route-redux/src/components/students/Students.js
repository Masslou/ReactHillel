import React from 'react';
import {Switch, Route, useRouteMatch, Link} from 'react-router-dom';
import StudentsList from './StudentsList';
import StudentForm from "./StudentForm";

export default function Students() {
    const {path, url} = useRouteMatch();
    return (
        <div style={mainContentStyles}>
            <h3>Students</h3>
            <Switch>
                <Route exact path={`${path}/`}>
                    <StudentsList/>
                    <Link to={`${url}/new`}>
                        <button style={addBtnStyle}>Add student</button>
                    </Link>
                </Route>
                <Route path={`${path}/:id`} render={(route) => {
                    return <StudentForm id={route.match.params.id}/>
                }}>
                </Route>
            </Switch>
        </div>
    );
}

const addBtnStyle = {
    cursor: 'pointer',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(315deg, rgb(0, 183, 18) 0%, rgb(122, 195, 91) 74%)',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 10px',
    width: 'fit-content',
    outlineColor: '#FFF',
    backgroundColor: '#00b712'
};

const mainContentStyles = {
    marginLeft: '40px'
};
