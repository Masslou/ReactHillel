import {
    SEARCH_WAITER_ACTION,
    SET_WAITERS_ACTION,
    CREATE_WAITERS_ACTION,
    UPDATE_WAITER_ACTION,
    DELETE_ITEM_ACTION,
} from '../actions/tablesActions';

const initialState = {
    list: [],
    search: ''
};


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case DELETE_ITEM_ACTION:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload.id)
            };


        case SEARCH_WAITER_ACTION:
            return {
                ...state,
                search: payload
            };

        case SET_WAITERS_ACTION:
            return {
                ...state,
                list: payload
            };

        case CREATE_WAITERS_ACTION:
            return {
                ...state,
                list: [...state.list, payload]
            };

        case UPDATE_WAITER_ACTION:
            return {
                ...state,
                list: state.list.map((item) => item.id == payload.id ? payload : item)
            };


        default:
            return state;
    }
}
;
