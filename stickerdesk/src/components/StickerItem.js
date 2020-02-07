import React, {useEffect} from 'react';
import propTypes from './propTypes';

export default function StickerItem({sticker, onDelete}) {

    return (
        <div style={stickerItemStyles}>
            <div>
                <input style={StickerItemTitleStyles}
                       type="text"
                       name="title"
                />
                <span
                    style={deleteBtnStyles}
                    onClick={onDelete.bind(null, sticker)}>x</span>
            </div>
            <div>
                    <textarea style={StickerItemDescriptionStyles}
                              name="description"/>
            </div>

        </div>
    );
}

const stickerItemStyles = {
    margin: '20px'
};

const deleteBtnStyles = {
    position: 'absolute',
    border: '2px solid black',
    padding: '0 2px',
    backgroundImage: 'linear-gradient(to right top, red, rgb(240, 109, 6))',
    color: '#FFF',
    fontWeight: 'bold',
    cursor: 'pointer'

};

const saveBtnStyles = {};

const StickerItemTitleStyles = {
    border: '2px solid black'
};

const StickerItemDescriptionStyles = {
    border: '2px solid black'
};

StickerItem.propTypes = {
    onDelete: propTypes.func.isRequired
};
