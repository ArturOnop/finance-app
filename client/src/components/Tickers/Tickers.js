import {useSelector} from "react-redux";
import Ticker from "./Ticker";
import Error from "../Error/Error";

const Tickers = () => {

    const tickersData = useSelector(state => state.tickers);
    const searchTickerData = useSelector(state => state.searchTicker);

    return (
        <>
            <div className="flex gap-x-10 shadow-lg p-5 mt-10 overflow-x-auto rounded">
                {!tickersData.tickers[0] ?
                    <div className="loader">Loading....</div> :
                    tickersData.error ?
                        <Error error={tickersData.error}/> :
                        tickersData.tickers
                            .filter(ticker => searchTickerData ?
                                ticker.ticker.includes(searchTickerData.toUpperCase()) : true)
                            .map((ticker) => <Ticker key={ticker.ticker} ticker={ticker}/>)}
            </div>
        </>
    )
}

export default Tickers;
