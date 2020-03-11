import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

export default function GroupItem({item, onDelete}) {
    const {url} = useRouteMatch();
    return (
        <>
            <Link to={`${url}/${item.id}`}>
                <li style={groupItemStyles}>{item.title}
                    <button style={deleteBtnStyles} onClick={event => onDelete(event, item)}>X</button>
                </li>
            </Link>
        </>
    );
}

const groupItemStyles = {
    listStyle: 'none',
    marginTop: '10px'
};

const deleteBtnStyles = {
    margin: '0 20px 0 10px',
    backgroundColor: '#f7b42c',
    backgroundImage: 'linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)',
    color: '#FFF',
    cursor: 'pointer'
};
