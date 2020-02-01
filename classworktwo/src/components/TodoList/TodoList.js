import React, {Component} from 'react';
import TodoListItems from "../TodoListItems/TodoListItems";
import './TodoList.css';

class TodoList extends Component {

    state = {
        list: [
            {id: 1, title: 'Task1', isDone: false},
            {id: 2, title: 'Task2', isDone: false},
            {id: 3, title: 'Task3', isDone: false},
            {id: 4, title: 'Task4', isDone: false}
        ]
    };

    deleteTodo = (id) => {
        const newList = this.state.list.filter((item) => {
            return item.id !== id
        });

        this.setState({
            list: newList
        });
        console.log('deleting todo', id)
    };

    toggleTodo(id) {
        const newList = this.state.list.map((item) => item.id !== id ? item : {

            ...item,
            isDone: !item.isDone
        });

        this.setState(
            {list: newList}
        )
    }

    render() {
        return (
            <>
                <header className="todolist-header">TodoList</header>
                <TodoListItems list={this.state.list} onDelete={this.deleteTodo}
                               onToggle={this.toggleTodo}/>
            </>
        );
    }
}

export default TodoList;
