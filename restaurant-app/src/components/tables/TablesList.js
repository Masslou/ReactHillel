import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {searchTable, deleteTable} from '../../store/actions/tablesActions';
import TableItem from './TableItem';

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
            <ul style={tablesList}>
                {list.map(item =>
                    <TableItem key={item.id} item={item} onDelete={onDelete}/>
                )}
            </ul>
        </div>

    );
}


const listSelector = (tables) => tables.list;
const searchSelector = (tables) => tables.search;

const getFilteredTables = createSelector(
    [listSelector, searchSelector],
    (list, search) => {
        const searchRegExp = new RegExp(search, 'gi');
        return search ? list.filter(item => item.name.match(searchRegExp)) : list
    }
);

function mapStateToProps({tables}) {
    return {
        list: getFilteredTables(tables),
        search: tables.search
    }
}

const mapDispatchToProps = {
    onSearch: searchTable,
    onDeleteTable: deleteTable,
};

const tablesList = {
    display: 'flex',
    listStyle: 'none'
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);


