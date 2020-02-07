import React, {useEffect, useState} from 'react';
import Header from "./Header";
import StickersList from "./StickersList";

export default function Board() {

    const [stickersList, setStickersList] = useState([]);


    useEffect(() => {
        const data = localStorage.getItem('stickers');
        setStickersList(data ? JSON.parse(data) : []);
    }, []);


    const saveSate = (data) => {
        localStorage.setItem('stickers', JSON.stringify(data));
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
        saveSate(stickers);
    };

    const onStickerChange = (id, changes) => {
        let sticker = stickersList.find(item => item.id === id);

        sticker = {
            ...sticker,
            ...changes
        };

        setStickersList(stickersList.map(item => item.id === sticker.id ? sticker : item));
        saveSate(stickersList);

    };

    const deleteSticker = (sticker) => {
        const newStickersList = stickersList.filter((item) => {
            return item.id !== sticker.id
        });
        setStickersList(newStickersList);
        saveSate(newStickersList)
    };

    return (
        <>
            <Header onAddBtnClick={onAddBtnClick}/>
            <div style={boardWrapperStyles}>
                <StickersList
                    stickersList={stickersList}
                    onDelete={deleteSticker}
                    onChange={onStickerChange}
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








