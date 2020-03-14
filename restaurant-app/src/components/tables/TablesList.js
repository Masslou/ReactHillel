import React from 'react';
import {connect} from 'react-redux';
import {searchTable, deleteTable} from '../../store/actions/tablesActions';
import TableItem from "./TableItem";

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

function mapStateToProps({tables}) {
    const searchRegExp = new RegExp(tables.search, 'gi');
    return {
        list: tables.search ?
            tables.list.filter(item => item.name.match(searchRegExp))
            : tables.list,
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


