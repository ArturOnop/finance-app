import {ADD_TO_TICKERS_HISTORY, CLEAR_TICKERS_HISTORY} from "./tickersHistoryType";

export const addToTickersHistory = tickers => {
    return {
        type: ADD_TO_TICKERS_HISTORY,
        payload: tickers
    }
}

export const clearTickersHistory = () => {
    return {
        type: CLEAR_TICKERS_HISTORY
    }
}
