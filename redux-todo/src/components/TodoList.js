import React from 'react';
import {connect} from 'react-redux';
import propTypes from "./propTypes";
import TodoItem from './TodoItem';


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


TodoList.propTypes = {
    todoList: propTypes.todoList.isRequired,
    showModalWindow: propTypes.func.isRequired
};

export default connect(mapStateToProps)(TodoList);
