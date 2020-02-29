import todoList from '../data/todoList';
import {CHANGE_VALUE, FORM_SUBMIT, DELETE_LIST_ITEM, EDIT_LIST_ITEM} from './actions';

const initialState = {
    todoList: todoList,
    selectedTodo: getEmptyTodo()
};

function getEmptyTodo() {
    return {
        title: '',
        isDone: false,
    }
}


function updateTodo(state, payload) {
    return {
        ...state, todoList: state.todoList.map((item) => {
            return item.id === payload.id ? payload : item;
        }),
        selectedTodo: getEmptyTodo()
    };
}

function createTodo(state, payload) {
    return {
        ...state, todoList: [...state.todoList, {id: Date.now(), ...payload}],
        selectedTodo: getEmptyTodo()
    }
}


export default function (state = initialState, {type, payload}) {
    console.log(state, type, payload);
    switch (type) {
        case CHANGE_VALUE:
            return {...state, selectedTodo: {...state.selectedTodo, ...payload}};
        case FORM_SUBMIT:
            return payload.id ? updateTodo(state, payload) : createTodo(state, payload);
        case DELETE_LIST_ITEM:
            return {
                ...state, todoList: state.todoList.filter((item) => {
                    return item.id !== payload
                })
            };
            case EDIT_LIST_ITEM:
            return {
                ...state, todoList: state.todoList.filter((item) => {
                    return item.id !== payload.id
                })
            };

        default:
            return state
    }
}
