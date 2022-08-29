import {GET_TICKERS_SUCCESS, GET_TICKERS_ERROR} from "./tickersType";
import {socket} from "../../socket/socket";
import {addToTickersHistory} from "../tickersHistory/tickersHistoryAction";

export const getTickersSuccess = tickers => {
    return {
        type: GET_TICKERS_SUCCESS,
        payload: tickers
    }
}

export const getTickersError = error => {
    return {
        type: GET_TICKERS_ERROR,
        payload: error
    }
}

export const getTickers = () => {
    return (dispatch) => {
        socket.open();

        socket.emit("start");

        socket.on("ticker", data => {
            if (data[0]) {
                dispatch(getTickersSuccess(data));
                dispatch(addToTickersHistory(data));
            } else dispatch(getTickersError("No tickers available"));
        })
    }
}
