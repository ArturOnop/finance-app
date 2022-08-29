import {combineReducers} from "redux";
import tickersReducer from "./tickers/tickersReducer";
import tickersHistoryReducer from "./tickersHistory/tickersHistoryReducer";

const rootReducer = combineReducers({
    tickers: tickersReducer,
    tickersHistory: tickersHistoryReducer
})

export default rootReducer;