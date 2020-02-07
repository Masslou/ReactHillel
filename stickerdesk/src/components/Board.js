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
                description: ''
            }
        ];

        setStickersList(stickers);
        saveSate(stickers);

    };

    const deleteSticker = (sticker) => {
        const newStickersList = stickersList.filter((item) => {
            return item.id !== sticker.id
        });

        setStickersList(newStickersList);
    };

    return (
        <>
            <Header onAddBtnClick={onAddBtnClick}/>
            <div style={boardWrapperStyles}>
                <StickersList
                    stickersList={stickersList}
                    onDelete={deleteSticker}
                />
                </div>
        </>
    )
}

const boardWrapperStyles ={
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '40px'
};








