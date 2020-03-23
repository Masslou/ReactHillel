import api from "../../services/api";
import {setLoader} from "./loaderActions";

export const SEARCH_TABLE_ACTION = 'SEARCH_TABLE_ACTION';

export function searchTable(query) {
    return {
        type: SEARCH_TABLE_ACTION,
        payload: query
    };
}

export const SET_TABLES_ACTION = 'SET_TABLES_ACTION';

export function setTables(data) {
    return {
        type: SET_TABLES_ACTION,
        payload: data
    };
}

export function getTables() {
    return function (dispatch) {
        dispatch(setLoader(true));

        api.get('/tables').then(response => {
            dispatch(setTables(response.data));
            dispatch(setLoader(false));
        })
    }
}


export function saveTable(table) {
    return function (dispatch) {
        if (!table.id) {
            api.post('/tables', table)
                .then(response => dispatch(createTable(response.data)))
        } else {
            api.put(`/tables/${table.id}`, table)
                .then(response => dispatch(updateTable(response.data)))
        }
    }
}


export const CREATE_TABLES_ACTION = 'CREATE_TABLES_ACTION';

export function createTable(table) {
    return {
        type: CREATE_TABLES_ACTION,
        payload: table
    };
}

export const UPDATE_TABLE_ACTION = 'UPDATE_TABLE_ACTION';

export function updateTable(table) {
    return {
        type: UPDATE_TABLE_ACTION,
        payload: table
    };
}

export const DELETE_ITEM_ACTION = 'DELETE_ITEM_ACTION';

export function deleteItem(id) {
    return {
        type: DELETE_ITEM_ACTION,
        payload: id
    };
}


export function deleteTable(id) {
    return function (dispatch) {
        api.delete(`/tables/${id}`).then(response => {
            dispatch(deleteItem(response.data));
        })
    }
}








