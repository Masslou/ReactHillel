import React from 'react';
import TodoItem from './TodoItem';
import propTypes from "./propTypes";

export default function TodosList({todosList, onDelete, onClick, onEdit}) {
    return (
        <ul>
            {todosList.map(todoItem => (
                <TodoItem
                    key={todoItem.id}
                    todo={todoItem}
                    onClick={onClick}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
}

TodosList.propTypes = {
    todosList: propTypes.todosList.isRequired,
    onDelete: propTypes.func.isRequired,
    onClick: propTypes.func.isRequired,
    onEdit: propTypes.func.isRequired
};
