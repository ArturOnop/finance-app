import {CHANGE_SEARCH_TICKER} from "./searchTickerType";

const initialState = "";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_TICKER:
            return action.payload
        default:
            return state
    }
}

export default reducer;
