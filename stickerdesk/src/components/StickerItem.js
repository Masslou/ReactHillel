import React, {useEffect} from 'react';
import propTypes from './propTypes';

export default function StickerItem({sticker, onDelete, onChange}) {


    const onChangeSticker = ({id}, event) => {
        onChange(sticker.id, {
            [event.target.name]: event.target.value
        })
    };


    return (
        <div style={stickerItemStyles}>
            <div>
                <input style={StickerItemTitleStyles}
                       type="text"
                       name="title"
                       onChange={(event) => onChangeSticker(sticker, event)}
                />
                <span
                    style={deleteBtnStyles}
                    onClick={() => onDelete(sticker)}
                >x</span>
            </div>
            <div>
                    <textarea style={StickerItemDescriptionStyles}
                              onChange={(event) => onChangeSticker(sticker, event)}
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
    onChange: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
};
