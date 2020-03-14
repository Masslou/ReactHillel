
export const LOADER_ACTION = 'LOADER_ACTION';
export function setLoader(loader) {
    return {
        type: LOADER_ACTION,
        payload: loader
    }
}
