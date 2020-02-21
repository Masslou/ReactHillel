import React from 'react';
import propTypes from './propTypes';

export default function Modal({isOpen, onCancel, onSubmit}) {
    return (
        <div style={modalOverall}>
            <div style={modalWindow}>
                <div style={modalHeader}></div>
                <div style={modalBody}></div>
                <div style={modalFooter}></div>
            </div>
        </div>
    );
}


const modalOverall = {
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
};

const modalWindow = {};
const modalHeader = {};
const modalBody = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '30%'
};
const modalFooter = {};

Modal.propTypes = {};
