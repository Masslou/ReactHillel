import {ACTION_GROUP_DELETE, ACTION_GROUP_SAVE, ACTION_GROUP_SEARCH} from '../actions/groupsActions'

import groupsList from '../../data/groupsList'

const initialState = {
    list: groupsList,
    search: ''
};


function updateGroup(list, group) {
    return list.map(item => item.id == group.id ? group : item)
}

function createGroup(list, group) {
    group.id = Date.now();
    return [...list, group]
}

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_GROUP_SAVE :
            return {
                ...state,
                list: payload.id
                    ? updateGroup(state.list, payload)
                    : createGroup(state.list, payload)
            };
        case ACTION_GROUP_SEARCH:
            return {
                ...state,
                search: payload
            };

        case ACTION_GROUP_DELETE:
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

