import React from 'react';
import propTypes from './propTypes';

export default function StickerItem({sticker, onDelete, onChange}) {


    const onChangeSticker = ({id}, event) => {
        onChange(id, {
            [event.target.name]: event.target.value
        })
    };


    return (
        <div style={stickerItemStyles}>
            <div>
                <h5 style={titleNameStyle}>Title</h5>
                <input style={StickerItemTitleStyles}
                       type="text"
                       name="title"
                       onChange={(event) => onChangeSticker(sticker, event)}/>
                <span style={deleteBtnStyles} onClick={() => onDelete(sticker)}>x</span>
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
    position: 'relative',
    backgroundColor: 'rgb(249, 197, 209)',
    backgroundImage: 'linear-gradient(315deg, rgb(249, 197, 209) 0%, rgb(151, 149, 239) 74%)',
    width: '200px',
    height: '200px',
    boxSizing: 'border-box',
    border: '2px solid',
    borderRadius: '11px',
    margin: '20px'
};

const deleteBtnStyles = {
    position: 'absolute',
    border: '2px solid black',
    padding: '0 2px',
    backgroundImage: 'linear-gradient(to right top, red, rgb(240, 109, 6))',
    color: '#FFF',
    fontWeight: 'bold',
    cursor: 'pointer',
    top: '-11px',
    right: '-4px'
};

const titleNameStyle = {
    margin: '0 5px',
    fontWeight: 'bold',
    color: '#FFF'
};

const StickerItemTitleStyles = {
    border: '2px solid black'
};

const DisabledTitleInputStyles = {
    pointerEvents: 'none'

};

const StickerItemDescriptionStyles = {
    border: '2px solid black'
};

StickerItem.propTypes = {
    onChange: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
};
