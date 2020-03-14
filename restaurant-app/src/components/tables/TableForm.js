import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';
import {saveTable} from "../../store/actions/tablesActions";

function TableForm({item, onSave}) {
    const [table, setTable] = useState(item);
    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(table);

        history.push('/tables');
    }

    function onChange({target}) {
        console.log(target);
        setTable({
            ...table,
            [target.name]: target.value
        });
    }

    return (

        <form onSubmit={onFormSubmit}>
            <label htmlFor="tablesName">Table: </label>
            <input
                name="name"
                type="text"
                value={table.name}
                onChange={onChange}
            />
            <label htmlFor="tableDescription">Description: </label>
            <input
                name="description"
                type="text"
                value={table.description}
                onChange={onChange}
            />
            <label htmlFor="sitsCount">Sits count: </label>
            <input
                name="sitsCount"
                type="text"
                value={table.sitsCount}
                onChange={onChange}
            />
            <button>Save</button>
        </form>
    );
}

function mapStateToProps({tables}, {id}) {
    console.log(tables);
    return {
        item:
            id !== 'new'
                ? tables.list.find(item => item.id == id)
                : {name: '', description: '', sitsCount: ''}
    };
}

const mapDispatchToProps = {
    onSave: saveTable
};

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);
