import React from 'react';
import TodoItem from './TodoItem';
import propTypes from "./propTypes";

export default function TodosList({todosList, onDelete, onClick}) {
    return (
        <ul>
            {todosList.map(todoItem => (
                <TodoItem
                    key={todoItem.id}
                    todo={todoItem}
                    onClick={onClick}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

TodosList.propTypes = {
    onDelete: propTypes.func.isRequired,
};
