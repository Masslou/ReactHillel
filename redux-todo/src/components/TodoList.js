import React from 'react';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';

function TodoList({todoList, showModalWindow}) {
    return (
        <ul>
            {todoList.map(todoItem => (
                <TodoItem key={todoItem.id} todo={todoItem} showModalWindow={showModalWindow}/>
            ))}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps, null)(TodoList);
