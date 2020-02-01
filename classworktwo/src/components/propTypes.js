import PropTypes from 'prop-types';


const todoItem = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isDone: PropTypes.bool

});

const todoItems = PropTypes.arrayOf(todoItem);

export default {
    ...PropTypes,
    todoItem,
    todoItems
}
