import React from 'react';
import propTypes from './propTypes'
import StickerItem from "./StickerItem";

export default function StickersList({stickersList, onDelete,onChange,onSave}) {
    return (
        stickersList.map((sticker) => {

            return <StickerItem
                key={sticker.id}
                sticker={sticker}
                onDelete={onDelete}
                onChange={onChange}
                onSave={onSave}
            />

        })
    )
}

StickersList.propTypes = {
    onChange: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired,
    stickersList: propTypes.stickersList.isRequired
};
