import {LOADER_ACTION} from "../actions/loaderActions";

const initState = {
    isLoading: true
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case LOADER_ACTION:
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state
    }

}
