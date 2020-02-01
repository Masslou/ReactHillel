import PropTypes from 'prop-types';

const contactItem = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isDone: PropTypes.bool
});

const contactItems = PropTypes.arrayOf(contactItem);


export default {
    ...PropTypes,
    contactItem,
    contactItems
}
