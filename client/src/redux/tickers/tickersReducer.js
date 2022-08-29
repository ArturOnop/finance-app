import {GET_TICKERS_SUCCESS, GET_TICKERS_ERROR} from "./tickersType";

const initialState = {
    tickers: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKERS_SUCCESS:
            return {
                tickers: action.payload,
                error: ""
            }
        case GET_TICKERS_ERROR:
            return {
                tickers: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;
