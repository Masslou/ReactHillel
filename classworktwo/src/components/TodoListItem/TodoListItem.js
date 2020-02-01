import React, {Component} from 'react';
import propTypes from '../propTypes'

class TodoListItem extends Component {
    onDeleteBtnClick = () => {
        this.props.onDelete(this.props.item.id)
    };

    onItemRowClick = () => {
        this.props.noToggle(this.props.item.id)
    };

    render() {
        const {item} = this.props;
        return (
            <tr className="todolist-item">
                <td>{item.title}
                    <button className='todolist-itemBtn' onClick={this.onDeleteBtnClick}>
                        delete
                    </button>
                </td>
            </tr>
        );
    }
}

TodoListItem.propTypes = {
    item: propTypes.todoItem.isRequired
};

export default TodoListItem;
