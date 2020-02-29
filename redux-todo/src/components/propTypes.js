import PropTypes from 'prop-types';

const todoItem = PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
});

const todoList = PropTypes.arrayOf(todoItem);

const isOpen = PropTypes.bool;

export default {
    ...PropTypes,
    todoItem,
    isOpen,
    todoList
}
