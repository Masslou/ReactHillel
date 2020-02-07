import React from 'react';
import propTypes from './propTypes'
import StickerItem from "./StickerItem";

export default function StickersList({stickersList}) {
    return (
        stickersList.map((sticker) => {

            return <StickerItem
                key={sticker.id}
                sticker={sticker}/>

        })
    );
}

StickersList.propTypes = {
    stickersList: propTypes.stickersList.isRequired
};
