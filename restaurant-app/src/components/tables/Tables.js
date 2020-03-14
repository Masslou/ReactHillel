import React, {useEffect} from 'react';
import {Route, Switch, useRouteMatch, Link} from "react-router-dom";
import TablesList from "./TablesList";
import TableForm from "./TableForm";
import {connect} from "react-redux";
import {getTables} from "../../store/actions/tablesActions";


function Tables({isLoading, getTables}) {

    useEffect(() => {
        getTables()
    }, [getTables]);


    const {path, url} = useRouteMatch();

    return (
        <div>
            <h3>Tables</h3>
            {isLoading ? "Loading..." :

                <Switch>
                    <Route exact path={`${path}/`}>
                        <TablesList/>
                        <Link to={`${url}/new`}>
                            <button style={addBtnStyle}>+</button>
                        </Link>
                    </Route>

                    <Route path={`${path}/:id`} render={(route) => {
                        return <TableForm id={route.match.params.id}/>
                    }}>
                    </Route>
                </Switch>
            }
        </div>

    );
}


const addBtnStyle = {
    borderRadius: '30%',
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

function mapStateToProps({loader}) {
    return {
        isLoading: loader.isLoading
    }
}


const mapDispatchToProps = {
    getTables: getTables
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
