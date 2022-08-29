import {ADD_TO_WATCH_LIST, CLEAR_WATCH_LIST, REMOVE_FROM_WATCH_LIST} from "./watchListType";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WATCH_LIST:
            let newState = state;
            newState.push(action.payload);
            return [...new Set(newState)];
        case REMOVE_FROM_WATCH_LIST:
            return [...new Set(state.filter(el => el !== action.payload))];
        case CLEAR_WATCH_LIST:
            return [];
        default:
            return state
    }
}

export default reducer;
