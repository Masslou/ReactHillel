import {
    SEARCH_TABLE_ACTION,
    SET_TABLES_ACTION,
    CREATE_TABLES_ACTION,
    UPDATE_TABLE_ACTION,
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


        case SEARCH_TABLE_ACTION:
            return {
                ...state,
                search: payload
            };

        case SET_TABLES_ACTION:
            return {
                ...state,
                list: payload
            };

        case CREATE_TABLES_ACTION:
            return {
                ...state,
                list: [...state.list, payload]
            };

        case UPDATE_TABLE_ACTION:
            return {
                ...state,
                list: state.list.map((item) => item.id == payload.id ? payload : item)
            };


        default:
            return state;
    }
}
;
