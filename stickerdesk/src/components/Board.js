import React, {useEffect, useState} from 'react';
import Header from "./Header";
import StickersList from "./StickersList";

export default function Board() {

    const [stickersList, setStickersList] = useState([]);


    useEffect(() => {
        const data = localStorage.getItem('stickers');
        setStickersList(data ? JSON.parse(data) : []);
    }, []);


    const saveState = (data) => {
        localStorage.setItem('stickers', JSON.stringify(data));
    };

    const saveSticker = (id) => {
        let sticker = stickersList.find(item => item.id === id);
        sticker = {
            ...sticker,
            isEdit: false
        };

        const newStickers = stickersList.map(item => item.id === sticker.id ? sticker : item);
        setStickersList(newStickers);
        saveState(newStickers);
    };


    const onAddBtnClick = () => {
        const stickers = [...stickersList,
            {
                id: Date.now(),
                title: '',
                description: '',
                isEdit: true
            }
        ];

        setStickersList(stickers);
        saveState(stickers);
    };

    const onStickerChange = (id, changes) => {
        let sticker = stickersList.find(item => item.id === id);

        sticker = {
            ...sticker,
            ...changes
        };

        const newStickers = stickersList.map(item => item.id === sticker.id ? sticker : item);
        setStickersList(newStickers);
        saveState(newStickers);

    };

    const deleteSticker = (sticker) => {
        const newStickersList = stickersList.filter((item) => {
            return item.id !== sticker.id
        });
        setStickersList(newStickersList);
        saveState(newStickersList)
    };

    return (
        <>
            <Header onAddBtnClick={onAddBtnClick}/>
            <div style={boardWrapperStyles}>
                <StickersList
                    stickersList={stickersList}
                    onDelete={deleteSticker}
                    onChange={onStickerChange}
                    onSave={saveSticker}
                />
            </div>
        </>
    )
}

const boardWrapperStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '40px'
};








