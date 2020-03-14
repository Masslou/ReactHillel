import React, {useEffect} from 'react';
import {Route, Switch, useRouteMatch, Link} from "react-router-dom";
import WaitersList from "./WaitersList";
import WaiterForm from "./WaiterForm";
import {connect} from "react-redux";
import {getWaiters} from "../../store/actions/waitersAction";


function Waiters({isLoading, getWaiters}) {

    useEffect(() => {
        getWaiters()
    }, [getWaiters]);


    const {path, url} = useRouteMatch();

    return (
        <div>
            <h3>Waiters</h3>

            { isLoading ? "Loading..." :
                <Switch>
                    <Route exact path={`${path}/`}>
                        <WaitersList/>
                        <Link to={`${url}/new`}>
                            <button style={addBtnStyle}>+</button>
                        </Link>
                    </Route>

                    <Route path={`${path}/:id`} render={(route) => {
                        return <WaiterForm id={route.match.params.id}/>
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
    getWaiters: getWaiters
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiters);
