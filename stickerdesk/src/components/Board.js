import React, {useEffect, useState} from 'react';
import Header from "./Header";
import StickersList from "./StickersList";

export default function Board() {

    const [stickersList, setStickersList] = useState([]);


    useEffect(() => {
        setStickersList(restoreData())
    }, []);


    const restoreData = () =>
    {
        const data = localStorage.getItem('stickers');
        return data ? JSON.parse(data) : [];

    };

    const saveState = (data) => {
        localStorage.setItem('stickers', JSON.stringify(data));
    };

    const saveSticker = (id) => {
        let sticker = stickersList.find(item => item.id === id);
        sticker = {
            ...sticker,
            isEdit: false
        };

        const updatedStickersList = stickersList.map(item => item.id === sticker.id ? sticker : item);
        setStickersList(updatedStickersList);
        saveState(updatedStickersList);
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

        const changedStickersList = stickersList.map(item => item.id === sticker.id ? sticker : item);
        setStickersList(changedStickersList);
        saveState(changedStickersList);

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








