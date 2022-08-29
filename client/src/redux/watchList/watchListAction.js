import {ADD_TO_WATCH_LIST, REMOVE_FROM_WATCH_LIST, CLEAR_WATCH_LIST} from "./watchListType";

export const addToWatchList = ticker => {
    return {
        type: ADD_TO_WATCH_LIST,
        payload: ticker
    }
}

export const removeFromWatchList = ticker => {
    return {
        type: REMOVE_FROM_WATCH_LIST,
        payload: ticker
    }
}

export const clearWatchList = () => {
    return {
        type: CLEAR_WATCH_LIST
    }
}
