import React from 'react';
import propTypes from './propTypes'
import StickerItem from "./StickerItem";

export default function StickersList({stickersList, onDelete}) {
    return (
        stickersList.map((sticker) => {

            return <StickerItem
                key={sticker.id}
                sticker={sticker}
                onDelete={onDelete}
            />

        })
    )
}

StickersList.propTypes = {
    onDelete: propTypes.func.isRequired,
    stickersList: propTypes.stickersList.isRequired
};
