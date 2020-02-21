import React from 'react';
import propTypes from './propTypes';

export default function TodoItem({todo, onDelete}) {
    return (
        <li style={{
            ...todoItemStyles,
            ...(todo.isDone ? {
                ...todoItemDoneStyles
            } : {}),

        }}
            onClick={() => console.log(`clicked ${todo.id}`)}
        >
            {todo.title}{' '}
            <span onClick={() => onDelete(todo.id)}>X</span>
            <span onClick={() => onDelete(todo.id)}>edit</span>
        </li>
    );
}

const todoItemStyles = {
    textAlign: 'left'
};

const todoItemDoneStyles = {
    backgroundColor: 'green'
};

TodoItem.propTypes = {
    todo: propTypes.todoItem.isRequired,
    onDelete: propTypes.func.isRequired,
};
