import {CHANGE_SETTINGS} from "./settingsModalType";

const initialState = {
    interval: 5000,
    showTickers: true,
    showWatchList: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SETTINGS:
            return action.payload
        default:
            return state
    }
}

export default reducer;
