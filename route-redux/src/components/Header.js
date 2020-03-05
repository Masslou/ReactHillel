import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div style={headerStyles}>
            <Link to='/home'>
                <button style={addBtnStyle}>Home page</button>
            </Link>
            <Link to='/students'>
                <button style={addBtnStyle}>Students</button>
            </Link>
            <Link to='/groups'>
                <button style={addBtnStyle}>Groups</button>
            </Link>
        </div>
    );
}

const headerStyles = {
    position: 'relative',
    backgroundColor: 'black',
    textAlign: 'center',
    fontSize: '40px',
    color: 'white',
    fontWeight: 'bold',
    userSelect: 'none',
    boxShadow: '0 5px 10px rgba(0,0,0,0.5)'
};

const addBtnStyle = {
    cursor: 'pointer',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(to top right, red, #f06d06)',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 10px',
    width: 'fit-content',
    outlineColor: '#FFF'

};





