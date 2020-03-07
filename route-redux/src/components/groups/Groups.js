import React from 'react';
import {Switch, Route, useRouteMatch, Link} from 'react-router-dom';
import GroupsList from './GroupsList';
import GroupForm from './GroupForm';


export default function Groups() {
    const {path, url} = useRouteMatch();
    return (
        <div style={mainContentStyles}>
            <h3>Groups</h3>
            <Switch>

                <Route exact path={`${path}/`}>
                    <GroupsList/>
                </Route>

                <Route path={`${path}/:id`} render={(route) => {
                    return <GroupForm id={route.match.params.id}/>}}>
                </Route>

            </Switch>

            <Link to={`${url}/new`}><button style={addBtnStyle}>Add group</button></Link>
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

const mainContentStyles ={
    marginLeft: '40px'
};
