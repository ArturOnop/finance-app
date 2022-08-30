import {CHANGE_INTERVAL} from "./settingsModalType";

const initialState = {
    interval: 5000
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INTERVAL:
            return {
                interval: action.payload
            }
        default:
            return state
    }
}

export default reducer;
