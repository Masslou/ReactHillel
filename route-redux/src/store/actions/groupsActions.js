export const ACTION_GROUP_SAVE = 'ACTION_GROUP_SAVE';
export const ACTION_GROUP_SEARCH = 'ACTION_GROUP_SEARCH';
export const ACTION_GROUP_DELETE = 'ACTION_GROUP_DELETE';

export function saveGroup(group) {
    return {
        type: ACTION_GROUP_SAVE,
        payload: group
    }
}

export function searchGroup(query) {
    return {
        type: ACTION_GROUP_SEARCH,
        payload: query
    }
}
export function deleteGroup(id) {
    return {
        type: ACTION_GROUP_DELETE,
        payload: id
    }
}
