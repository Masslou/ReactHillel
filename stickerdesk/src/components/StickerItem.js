import React from 'react';
import propTypes from './propTypes';

export default function StickerItem({sticker, onDelete, onChange, onSave}) {


    const onChangeSticker = (event) => {
        onChange(sticker.id, {[event.target.name]: event.target.value})
    };


    const renderActionBtns = () => {
        if (sticker.isEdit) {
            return <span title={"Save sticker"} style={saveBtnStyles} onClick={() => onSave(sticker.id)}>V</span>
        } else {
            return <span title={"Delete"} style={deleteBtnStyles} onClick={() => onDelete(sticker)}>X</span>
        }
    };


    return (
        <div style={stickerItemStyles}>
            <div>
                <h5 style={fieldsNameStyles}>Title</h5>
                <input style={{
                    ...stickerItemTitleStyles,
                    ...(!sticker.isEdit ? {
                        ...disabledTitle
                    } : {}),
                }}
                       type="text"
                       name="title"
                       value={sticker.title}
                       onChange={(event) => onChangeSticker(event)}/>
            </div>
            {renderActionBtns()}
            <div>
                <h5 style={fieldsNameStyles}>Description</h5>
                <textarea style={stickerItemDescriptionStyles}
                          onChange={(event) => onChangeSticker(event)}
                          value={sticker.description}
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

const disabledTitle = {
    pointerEvents: 'none',
    backgroundColor: 'rgb(126, 232, 250)',
    backgroundImage: 'linear-gradient(315deg, rgb(42, 104, 16) 0%, rgb(128, 255, 114) 74%)'
};

const deleteBtnStyles = {
    position: 'absolute',
    border: '2px solid black',
    padding: '2px 4px',
    backgroundImage: 'linear-gradient(to right top, red, rgb(240, 109, 6))',
    color: '#FFF',
    fontWeight: 'bold',
    cursor: 'pointer',
    top: '-17px',
    right: '-4px'
};

const saveBtnStyles = {
    position: 'absolute',
    border: '2px solid black',
    padding: '2px 4px',
    backgroundColor: 'rgb(126, 232, 250)',
    backgroundImage: 'linear-gradient(315deg, rgb(42, 104, 16) 0%, rgb(128, 255, 114) 74%)',
    color: '#FFF',
    fontWeight: 'bold',
    cursor: 'pointer',
    top: '-17px',
    right: '-4px'
};

const fieldsNameStyles = {
    margin: '0 5px',
    fontWeight: 'bold',
    color: '#FFF'
};

const stickerItemTitleStyles = {
    width: '90%',
    marginLeft: '5px',
    border: '2px solid black'
};

const stickerItemDescriptionStyles = {
    marginLeft: '5px',
    width: '90%',
    border: '2px solid black'
};

StickerItem.propTypes = {
    sticker: propTypes.stickerItem.isRequired,
    onChange: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired,
    onSave: propTypes.func.isRequired
};
