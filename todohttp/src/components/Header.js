import React from 'react';
import propTypes from './propTypes';

export default function Header({onAddBtnClick}) {
    return (
        <header style={headerStyles}>
            <span style={headerText}>ToDo List</span>
            <button style={addBtnStyle}
                    onClick={onAddBtnClick}>Add
            </button>
        </header>
    );
}

const headerText = {
    textShadow: 'rgba(154, 154, 154, 0.5) 3px -6px 0px',
    fontSize: '50px'
};

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

Header.propTypes = {
    onAddBtnClick: propTypes.func.isRequired,
};


