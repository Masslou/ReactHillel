export const ACTION_STUDENT_SAVE = 'ACTION_STUDENT_SAVE';
export const ACTION_STUDENT_SEARCH = 'ACTION_STUDENT_SEARCH';
export const ACTION_STUDENT_DELETE = 'ACTION_STUDENT_DELETE';

export function saveStudent(value) {
    return {type: ACTION_STUDENT_SAVE, payload: value}
}

export function searchStudent(query) {
    return {
        type: ACTION_STUDENT_SEARCH,
        payload: query
    }
}
export function deleteStudent(id) {
    return {
        type: ACTION_STUDENT_DELETE,
        payload: id
    }
}
