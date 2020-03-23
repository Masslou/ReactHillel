import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect'
import {searchWaiter, deleteWaiter} from '../../store/actions/waitersAction';
import WaiterItem from "./WaiterItem";

function TableList({list, search, onSearch, onDeleteTable}) {


    function onDelete(event, item) {
        event.preventDefault();
        onDeleteTable(item.id);
    }

    return (
        <div>
            <h6>search:</h6>
            <input
                type='text'
                value={search}
                onChange={({target}) => onSearch(target.value)}
            />
            <ul style={waitersList}>
                {list.map(item =>
                    <WaiterItem key={item.id} item={item} onDelete={onDelete}/>
                )}
            </ul>
        </div>

    );
}

const listSelector = (waiters) => waiters.list;
const searchSelector = (waiters) => waiters.search;

const getFilteredWaiters = createSelector(
    [listSelector, searchSelector],
    (list, search) => {
        console.log('search',search);
        const searchRegExp = new RegExp(search, 'gi');
        return search ? list.filter(item => item.name.match(searchRegExp)) : list
    }
);

function mapStateToProps({waiters}) {
    return {
        list: getFilteredWaiters(waiters),
        search: waiters.search
    }
}

const mapDispatchToProps = {
    onSearch: searchWaiter,
    onDeleteTable: deleteWaiter,
};

const waitersList = {
    display: 'flex',
    listStyle: 'none'
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);


