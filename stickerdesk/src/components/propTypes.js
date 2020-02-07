import PropTypes from 'prop-types';

const stickerItem = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
});

const stickersList = PropTypes.arrayOf(stickerItem);


export default {
    ...PropTypes,
    stickerItem,
    stickersList
}
