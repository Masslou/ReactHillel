import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

export default function StudentItem({item, onDelete}) {
    const { url } = useRouteMatch();

    return (
        <>
            <Link to={`${url}/${item.id}`}>
                <li style={studentItemStyles}><span>student name:</span> {item.title}
                    <span>student's group</span>{item.groupId}</li>
            </Link>
            <button style={deleteBtnStyles} onClick={(event) => onDelete(event, item)}>X</button>
        </>
    );
}
const studentItemStyles = {
    display: 'inline-grid'
};

const deleteBtnStyles = {
    margin: '20px 20px 0 0',
    backgroundColor: '#f7b42c',
    backgroundImage: 'linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)',
    color:'#FFF'
};
