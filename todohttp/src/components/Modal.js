import React from 'react';
import propTypes from './propTypes';



export default function TodoModalForm({onChange, submit}) {

    function onFormSubmit(event) {
        event.preventDefault();
        submit(todo)
    }

    function onChangeTodo(event) {
        onChange({[event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div style={modalOverall}>
                <div style={modalWindow}>
                <span style={modalCloseBtnStyles}
                      onClick={onCancel}>x</span>
                    <div style={modalHeader}>
                        <header>ToDo</header>
                    </div>
                    <div>
                        <input name="title"
                               type="text"
                               value={todo.title}
                               onChange={(event) => onChangeTodo(event)}
                        />
                    </div>
                    <div style={modalFooter}>
                        <button type="submit"
                                style={submitButton}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
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

const modalWindow = {
    position: 'relative',
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '30%'
};

const modalHeader = {
    padding: '2px 16px',
    backgroundColor: '#000000',
    color: 'white',
    marginBottom: '11px'
};

const modalCloseBtnStyles = {
    position: 'absolute',
    padding: '5px',
    border: '1px solid rgb(136, 136, 136)',
    color: 'white',
    left: '99%',
    backgroundImage: 'linear-gradient(to right top, red, rgb(240, 109, 6))',
    fontWeight: 'bold',
    top: '-34px',
    borderRadius: '4px',
    cursor: 'pointer'
};

const modalFooter = {
    display: 'flex'
};

const submitButton = {
    backgroundColor: '#52bd52',
    color: 'white',
    border: '2px solid black',
    padding: '5px',
    borderRadius: '5px'
}

TodoModalForm.propTypes = {
    todo: propTypes.todoItem.isRequired,
    isOpen: propTypes.isOpen.isRequired,
    onCancel: propTypes.func.isRequired,
    onSave: propTypes.func.isRequired,
    onChange: propTypes.func.isRequired
};
