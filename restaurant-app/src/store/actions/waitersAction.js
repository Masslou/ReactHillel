import api from "../../services/api";
import {setLoader} from "./loaderActions";

export const SEARCH_WAITER_ACTION = 'SEARCH_WAITER_ACTION';

export function searchWaiter(query) {
    return {
        type: SEARCH_WAITER_ACTION,
        payload: query
    };
}

export const SET_WAITER_ACTION = 'SET_WAITER_ACTION';

export function setWaiters(data) {
    return {
        type: SET_WAITER_ACTION,
        payload: data
    };
}

export function getWaiters() {
    return function (dispatch) {
        dispatch(setLoader(true));

        api.get('/waiters').then(response => {
            dispatch(setWaiters(response.data));
            dispatch(setLoader(false));
        })
    }
}

export function saveWaiter(table) {
    return function (dispatch) {
        if (!table.id) {
            api.post('/waiters', table)
                .then(response => dispatch(createWaiter(response.data)))
        } else {
            api.put(`/waiters/${table.id}`, table)
                .then(response => dispatch(updateWaiter(response.data)))
        }
    }
}

export const CREATE_WAITER_ACTION = 'CREATE_WAITER_ACTION';

export function createWaiter(table) {
    return {
        type: CREATE_WAITER_ACTION,
        payload: table
    };
}

export const UPDATE_WAITER_ACTION = 'UPDATE_WAITER_ACTION';

export function updateWaiter(table) {
    return {
        type: UPDATE_WAITER_ACTION,
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


export function deleteWaiter(id) {
    return function (dispatch) {
        api.delete(`/waiters/${id}`).then(response => {
            dispatch(deleteItem(response.data));
        })
    }
}








