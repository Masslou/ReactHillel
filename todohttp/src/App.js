import React, {useEffect, useState} from 'react';
import './App.css';
import api from './services/api';
import Header from './components/Header';
import TodosList from "./components/TodosList";
import Modal from "./components/Modal";

function App() {
    const [todos, setTodos] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [newTodo, setNewTodo] = useState({
        title: '',
        isDone: false,
    });


    useEffect(() => {
        api.get('').then(resp => setTodos(resp.data));
    }, []);


    function onTodoDelete(id) {
        api.delete(id).then(resp => {
            setTodos(todos.filter(todo => todo.id !== resp.data.id));
        });
    }

    function onChange() {

    }

    function showModalWindow() {
        setModalShow(true);
    }

    function closeModalWindow() {
        setModalShow(false)
    }


    return (
        <div className="App">
            <Header onAddBtnClick={showModalWindow}/>
            <TodosList todosList={todos}
                       onDelete={onTodoDelete}
            />

            {modalShow ? <Modal/> : null}
        </div>
    );
}

export default App;
