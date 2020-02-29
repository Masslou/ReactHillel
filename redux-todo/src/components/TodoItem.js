import React from 'react';
import {connect} from 'react-redux';
import {deleteListItem, editListItem} from "../store/actions";

function TodoItem({todo, deleteItem, editItem, showModalWindow}) {

    function onEditBtnClick(event) {
        event.stopPropagation();
        showModalWindow();
        editItem(todo.id)
    }

    function onDeleteBtnClick(event) {
        event.stopPropagation();
        deleteItem(todo.id)
    }

    return (
        <li style={todoItemStyles}>
            <span style={todoItemTitleStyles}>{todo.title}</span>
            <span style={todoDelBtnStyles}
                  onClick={(event) => onDeleteBtnClick(event)}>delete</span>
            <span style={todoEditBtnStyles}
                  onClick={(event) => onEditBtnClick(event)}>edit</span>
        </li>
    );
}

const todoItemStyles = {
    display: 'flex'
};

const todoItemTitleStyles = {
    textAlign: 'left',
    cursor: 'pointer',
    margin: '10px 10px 0 0'
};
const todoDelBtnStyles = {
    padding: '2px',
    fontSize: '10px',
    margin: '4px 2px',
    backgroundImage: 'linear-gradient(to top right, red, #f06d06)',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '1px solid black'
};

const todoEditBtnStyles = {
    padding: '2px',
    fontSize: '10px',
    margin: '5px',
    backgroundColor: 'lightgreen',
    color: 'black',
    border: '1px solid',
    cursor: 'pointer',
    fontWeight: 'bold'
};

const mapDispatchToProps = {
    deleteItem: deleteListItem,
    editItem: editListItem,
};

export default connect(null, mapDispatchToProps)(TodoItem);
