import {ACTION_STUDENT_DELETE, ACTION_STUDENT_SAVE, ACTION_STUDENT_SEARCH} from '../actions/studentsActions'

import studentsList from '../../data/studentsList';

const initialState = {
    list: studentsList,
    search: ''
};

export default function (state = initialState, {type, payload}) {
    switch (type) {

        case ACTION_STUDENT_DELETE:
            return {
                ...state,
                list: state.list.filter((item) => {
                    return item.id !== payload
                })
            };
        default:
            return state;

    }
}
