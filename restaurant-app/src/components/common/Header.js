import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div style={headerStyles}>
            <header style={headerTitle}>SteakBeauty Restaurant</header>
            <div style={navButtonWrapper}>
                <Link to='/tables'>
                    <button style={navButton}>Tables</button>
                </Link>
                <Link to='/waiters'>
                    <button style={navButton}>Waiters</button>
                </Link>
            </div>
        </div>
    );
}

const headerStyles = {
    display: 'flex',
    textAlign: 'center',
    fontSize: '40px',
    color: 'white',
    fontWeight: 'bold',
    userSelect: 'none',
    boxShadow: '0 5px 10px rgba(0,0,0,0.5)'
};

const headerTitle = {
    fontFamily: `'Rubik One', sans-serif`,
    fontSize: '50px',
    textTransform: 'uppercase',
    backgroundImage: 'linear-gradient(to right, red , orange)',
    display: 'table',
    margin: '20px auto',
    color: 'white',
    borderRadius: '5px',
    mixBlendMode: 'multiply',
    padding: '5px 10px'
};

const navButton = {
    borderRadius: '5px',
    padding: '2px',
    mixBlendMode: 'multiply',
    textTransform: 'uppercase',
    fontFamily: `'Rubik One', sans-serif`,
    cursor: 'pointer',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(to top right, black, #f06d06)',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 10px 10px 5px',
    width: '120px',
    outlineColor: '#FFF'


};

const navButtonWrapper = {
    position: 'absolute',

    margin: '20px 0 0 20px'

};





