import React from 'react';

export default function StudentItem({item}) {
    return (
        <li>{item.id} {item.title} {item.groupID} {item.id}></li>
    );
}
