export const CHANGE_VALUE = 'CHANGE_VALUE';
export const FORM_SUBMIT = 'FORM_SUBMIT';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const EDIT_LIST_ITEM = 'EDIT_LIST_ITEM';
export const TOGGLE_LIST_ITEM = 'TOGGLE_LIST_ITEM';

export function changeValue(changes) {
    return {type: CHANGE_VALUE, payload: changes}
}

export function onFormSubmit(todoItem) {
    return {type: FORM_SUBMIT, payload: todoItem}
}

export function deleteListItem(id) {
    return {type: DELETE_LIST_ITEM, payload: id}
}

export function editListItem(id) {
    return {type: EDIT_LIST_ITEM, payload: id}
}

export function toggleListItem(id) {
    return {type: toggleListItem, payload: id}
}
