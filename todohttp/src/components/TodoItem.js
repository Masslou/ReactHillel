import React from 'react';
import propTypes from './propTypes';

export default function TodoItem({todo, onDelete, onEdit, onClick}) {

    function onEditBtnClick(event) {
        event.stopPropagation();
        onEdit(todo.id)
    }

    function onDeleteBtnClick(event) {
        event.stopPropagation();
        onDelete(todo.id)
    }

    return (
        <li style={todoItemStyles} onClick={() => onClick(todo)}>
            <span style={{
                ...todoItemTitleStyles,
                ...(todo.isDone ? {
                    ...todoItemDoneStyles
                } : {}),
            }}>{todo.title}{' '}</span>
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

const todoItemDoneStyles = {
    textDecoration: 'line-through'
};

TodoItem.propTypes = {
    todo: propTypes.todoItem.isRequired,
    onEdit: propTypes.func.isRequired,
    onClick: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
};
