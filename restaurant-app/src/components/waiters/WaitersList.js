import React from 'react';
import {connect} from 'react-redux';
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

function mapStateToProps({waiters}) {
    const searchRegExp = new RegExp(waiters.search, 'gi');
    return {
        list: waiters.search ?
            waiters.list.filter(item => item.name.match(searchRegExp))
            : waiters.list,
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


