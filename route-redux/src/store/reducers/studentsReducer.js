import {ACTION_STUDENT_DELETE, ACTION_STUDENT_SAVE, ACTION_STUDENT_SEARCH} from '../actions/studentsActions'

import studentsList from '../../data/studentsList';

const initialState = {
    list: studentsList,
    search: ''
};

function updateStudent(list, student) {
    return list.map(item => item.id == student.id ? student : item)
}

function createStudent(list, student) {
    student.id = Date.now();
    return [...list, student]
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
            return {
                ...state,
                list: payload.id
                    ? updateStudent(state.list, payload)
                    : createStudent(state.list, payload)
            };

        case ACTION_STUDENT_SEARCH:
            return {
                ...state,
                search: payload
            };
        default:
            return state;

    }
}
