import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTickers} from "../redux/tickers/tickersAction";
import Ticker from "./Ticker";
import {socket} from "../socket/socket";

const Tickers = () => {

    const tickersData = useSelector(state => state.tickers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickers());
        return () => socket.close();
    }, []);

    return (
        <div className="w-5/6 flex gap-x-10 mx-auto shadow p-5 mt-10 overflow-x-auto rounded">
            {!tickersData.tickers[0] ?
                <div className="loader">Loading....</div> :
                tickersData.error ?
                    <div>Error occurred: {tickersData.error}</div> :
                    tickersData.tickers.map((ticker) => <Ticker key={ticker.ticker} ticker={ticker}/>)}
        </div>
    )
}

export default Tickers;
