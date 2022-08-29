import {combineReducers} from "redux";
import tickersReducer from "./tickers/tickersReducer";
import tickersHistoryReducer from "./tickersHistory/tickersHistoryReducer";
import watchListReducer from "./watchList/watchListReducer";

const rootReducer = combineReducers({
    tickers: tickersReducer,
    tickersHistory: tickersHistoryReducer,
    watchList: watchListReducer
})

export default rootReducer;