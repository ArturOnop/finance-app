import {combineReducers} from "redux";
import tickersReducer from "./tickers/tickersReducer";
import tickersHistoryReducer from "./tickersHistory/tickersHistoryReducer";
import watchListReducer from "./watchList/watchListReducer";
import searchTickerReducer from "./searchTicker/searchTickerReducer";
import settingsModalReducer from "./settingsModal/settingsModalReducer";

const rootReducer = combineReducers({
    tickers: tickersReducer,
    tickersHistory: tickersHistoryReducer,
    watchList: watchListReducer,
    searchTicker: searchTickerReducer,
    settingsModal: settingsModalReducer
})

export default rootReducer;