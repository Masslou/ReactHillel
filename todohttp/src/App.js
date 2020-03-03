import React, {useEffect, useState} from 'react';
import './App.css';
import api from './services/api';
import Header from './components/Header';
import TodosList from "./components/TodosList";
import TodoModalForm from "./components/Modal";


function App() {
    const [todos, setTodos] = useState([]);
    const [todoModalShow, setTodoModalShow] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(getEmptyTodo()
    );


    useEffect(() => {
        api.get('').then(resp => setTodos(resp.data));
    }, []);


    function onTodoDelete(id) {
        api.delete(id).then(resp => {
            setTodos(todos.filter(todo => todo.id !== resp.data.id));
        });
    }

    function onTodoChange(changes) {
        setSelectedTodo({
            ...selectedTodo,
            ...changes
        });
    }

    function getEmptyTodo() {
        return {
            title: '',
            isDone: false,
        }
    }

    function onSave(todo) {
        if (todo.id) {
            updateTodo(todo)
        } else {
            createTodo(todo)
        }
    }

    function onEdit(id) {
        showModalWindow();
        const todo = todos.find(item => item.id === id);
        setSelectedTodo(todo);
    }

    function toggleState(todo) {
        todo.isDone = !todo.isDone;
        api.put(todo.id, todo).then(resp =>
            setTodos(todos.map(item =>
                item.id === resp.data.id ? resp.data : item))
        )
    }

    function createTodo(todo) {
        api.post('', todo)
            .then(resp => setTodos([...todos, resp.data]))
            .then(closeModalWindow());
    }

    function updateTodo(todo) {
        api.put(todo.id, todo).then(resp => {
            setTodos(
                todos.map(item => (item.id === resp.data.id ? resp.data : item))
            );
        }).then(closeModalWindow);
    }

    function onAddNewTodo() {
        setSelectedTodo(getEmptyTodo());
        showModalWindow();
    }

    function showModalWindow() {
        setTodoModalShow(true);
    }

    function closeModalWindow() {
        setTodoModalShow(false)
    }


    return (
        <div className="App">
            <Header onAddBtnClick={onAddNewTodo}/>
            <TodosList todosList={todos}
                       onDelete={onTodoDelete}
                       onEdit={onEdit}
                       onClick={toggleState}

            />

            {todoModalShow ?
                <TodoModalForm
                    onSave={onSave}
                    onCancel={closeModalWindow}
                    onChange={onTodoChange}
                    todo={selectedTodo}
                    isOpen={todoModalShow}
                />
                : null}
        </div>
    );
}

export default App;
