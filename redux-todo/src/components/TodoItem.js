import React from 'react';
import {connect} from 'react-redux';
import {deleteListItem, editListItem, toggleListItem} from "../store/actions";
import propTypes from "./propTypes";

function TodoItem({todo, deleteItem, editItem, toggleItem, showModalWindow}) {

    function onEditBtnClick(event) {
        event.stopPropagation();
        showModalWindow();
        editItem(todo)
    }

    function onDeleteBtnClick(event) {
        event.stopPropagation();
        deleteItem(todo.id)
    }

    return (
        <li style={todoItemStyles}>
            <span style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}
                  onClick={() => toggleItem(todo.id)}>{todo.title}</span>
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
    toggleItem: toggleListItem
};

TodoItem.propTypes = {
    todo: propTypes.todoItem.isRequired,
    editItem: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired,
    toggleListItem: propTypes.func.isRequired,
    showModalWindow: propTypes.func.isRequired
};


export default connect(null, mapDispatchToProps)(TodoItem);
