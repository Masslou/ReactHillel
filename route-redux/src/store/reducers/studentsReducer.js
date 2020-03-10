import {ACTION_STUDENT_DELETE, ACTION_STUDENT_SAVE, ACTION_STUDENT_SEARCH} from '../actions/studentsActions'

import studentsList from '../../data/studentsList';

const initialState = {
    list: studentsList,
    search: ''
};

function createStudent(state, payload) {
    return {
        ...state,
        list: [...state.list,
            {id: Date.now(), groupId: payload.groupId, title: payload.title}]
    }
}

function updateStudent(state, payload) {
console.log(payload)
    return {
        ...state,
        list: state.list.map(item => {
            return item.id === payload.id ? payload : item;
        })
    }
}


export default function (state = initialState, {type, payload}) {
    switch (type) {

        case ACTION_STUDENT_DELETE:
            return {
                ...state,
                list: state.list.filter((item) => {
                    return item.id !== payload
                })
            };

        case ACTION_STUDENT_SAVE:
            return payload.id ? updateStudent(state, payload) : createStudent(state, payload);

        case ACTION_STUDENT_SEARCH:
            return {
                ...state,
                search: payload
            };
        default:
            return state;

    }
}
