import React from 'react';
import PropTypes from 'prop-types';

export default function Header({onAddBtnClick}) {
    return (
        <header style={headerStyles}>
            <span style={headerText}>Stickerz</span>
            <button style={addBtnStyle}
                    onClick={onAddBtnClick}>Add new sticker
            </button>
        </header>
    );
}

const headerText = {
    textShadow: '3px -6px 0px rgba(0,0,0,0.5)',
};

const headerStyles = {
    position: 'relative',
    backgroundColor: '#f9c5d1',
    backgroundImage: 'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)',
    textAlign: 'center',
    fontSize: '40px',
    color: 'white',
    fontWeight: 'bold',
    userSelect: 'none',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
};

const addBtnStyle = {
    cursor: 'pointer',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(to top right, red, #f06d06)',
    fontWeight: 'bold',
    color: 'white',
    margin: '15px',
    width: 'fit-content'
};

Header.propTypes = {
    onAddBtnClick: PropTypes.func.isRequired,
};


