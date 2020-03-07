import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

export default function GroupItem({item, onDelete}) {
    const {url} = useRouteMatch();
    return (
        <>
            <Link to={`${url}/${item.id}`}>
                <li>{item.title}
                </li>
            </Link>
            <button onClick={(event) => onDelete(event, item)}>x</button>
        </>
    );
}
