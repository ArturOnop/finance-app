import {CHANGE_SEARCH_TICKER} from "./searchTickerType";

export const changeSearchTicker = search => {
    return {
        type: CHANGE_SEARCH_TICKER,
        payload: search
    }
}