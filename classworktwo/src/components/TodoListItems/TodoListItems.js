import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoListItems.css'
import propTypes from "../propTypes";


class TodoListItems extends Component {
    render() {

        const 
        const {list, onDelete} = this.props;
        return (

            <body className="todolist-list">
            {list.map((item) => (
                <TodoListItem key={item.id}
                              item={item}
                              onDelete={onDelete}/>
            ))
            }
            </body>
        );
    }


}

TodoListItems.propTypes = {
    list: propTypes.todoItems.isRequired,
    onDelete: propTypes.func.isRequired
};

export default TodoListItems;
