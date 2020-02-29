import React, {useState} from 'react';
import Header from './Header';
import TodosList from "./TodoList";
import TodoModalForm from "./TodoModalForm";


function Todo() {
    const [todoModalShow, setTodoModalShow] = useState(false);


    function showModalWindow() {
        setTodoModalShow(true);
    }

    function closeModalWindow() {
        setTodoModalShow(false)
    }


    return (
        <div className="App">
            <Header onAdd={showModalWindow}/>
            <TodosList showModalWindow={showModalWindow}/>

            {todoModalShow ?
                <TodoModalForm closeModalWindow={closeModalWindow}/> : null}
        </div>
    );
}

export default Todo;
