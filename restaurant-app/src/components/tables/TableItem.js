import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

export default function TableItem({item, onDelete}) {
    const {url} = useRouteMatch();
    return (
        <>
            <Link to={`${url}/${item.id}`}>
                <li style={TableItemStyles}>
                    <span>{item.name}</span>
                    <button style={deleteBtnStyles} onClick={event => onDelete(event, item)}>X</button>
                </li>
            </Link>
        </>
    );
}

const TableItemStyles = {
    listStyle: 'none',
    marginTop: '10px',
    backgroundColor: '#855E42',
    height: '180px',
    borderRadius: '40px',
    marginLeft: '10px',
    position: 'relative',
    width: '200px'
};

const deleteBtnStyles = {
    margin: '0 20px 0 10px',
    backgroundColor: '#f7b42c',
    backgroundImage: 'linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)',
    color: '#FFF',
    cursor: 'pointer'
};
