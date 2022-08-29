import {ADD_TO_TICKERS_HISTORY, CLEAR_TICKERS_HISTORY} from "./tickersHistoryType";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_TICKERS_HISTORY:
            let newState = state;
            if (state.length === 10) newState.pop();
            newState.unshift(action.payload);
            return [...newState];
        case CLEAR_TICKERS_HISTORY:
            return [];
        default:
            return state
    }
}

export default reducer;
