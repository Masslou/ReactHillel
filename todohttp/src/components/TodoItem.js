import React from 'react';
import propTypes from './propTypes';

export default function TodoItem({todo, onDelete, onEdit, onClick}) {
    return (
        <li style={{
            ...todoItemStyles,
            ...(todo.isDone ? {
                ...todoItemDoneStyles
            } : {}),

        }}
            onClick={() => onClick(todo)}
        >
            {todo.title}{' '}
            <span style={todoDelBtnStyles} onClick={() => onDelete(todo.id)}>X</span>
            <span style={todoEditBtnStyles} onClick={() => onEdit(todo.id)}>edit</span>
        </li>
    );
}

const todoItemStyles = {
    textAlign: 'left'
};
const todoDelBtnStyles = {
    fontSize: '10px',
    margin: '4px 2px',
    backgroundImage: 'linear-gradient(to top right, red, #f06d06)',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer'
};

const todoEditBtnStyles = {
    fontSize: '10px',
    margin: '5px',
    backgroundColor: 'lightgreen',
    color: 'black',
    border: '1px solid',
    cursor: 'pointer',
    fontWeight: 'bold'
};

const todoItemDoneStyles = {
    backgroundColor: 'yellow'
};

TodoItem.propTypes = {
    todo: propTypes.todoItem.isRequired,
    onDelete: propTypes.func.isRequired,
};
