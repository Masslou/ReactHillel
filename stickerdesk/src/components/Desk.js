import React, {useEffect, useState} from 'react';
import Header from "./Header";
import StickersList from "./StickersList";

export default function Desk() {

    const [stickersList, setStickersList] = useState([]);


    useEffect(() => {
        const raw = localStorage.getItem('stickers') || [];
        setStickersList(JSON.parse(raw))


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
                x: 20,
                y: 20
            }
        ];

        setStickersList(stickers);
        saveSate(stickers);

    };

    return (
        <>
            <Header onAddBtnClick={onAddBtnClick}/>
            <div>
                <StickersList stickersList={stickersList}/>
            </div>
        </>
    )
}








