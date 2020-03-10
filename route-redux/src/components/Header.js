import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div style={headerStyles}>
            <Link to='/students'>
                <button style={navButton}>Students</button>
            </Link>
            <Link to='/groups'>
                <button style={navButton}>Groups</button>
            </Link>
        </div>
    );
}

const headerStyles = {
    display: 'flex',
    backgroundColor: 'black',
    textAlign: 'center',
    fontSize: '40px',
    color: 'white',
    fontWeight: 'bold',
    userSelect: 'none',
    boxShadow: '0 5px 10px rgba(0,0,0,0.5)'
};

const navButton = {
    cursor: 'pointer',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(to top right, red, #f06d06)',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 10px 20px 5px',
    width: 'fit-content',
    outlineColor: '#FFF',

};





