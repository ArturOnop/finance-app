import WatchElement from "./WatchElement";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const WatchList = () => {

    const watchListData = useSelector(state => state.watchList);
    const tickersData = useSelector(state => state.tickers);

    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        setWatchList(tickersData.tickers[0] ?
            tickersData.tickers.filter(ticker => watchListData.includes(ticker.ticker)) : []);
    }, [tickersData, watchListData])

    return (
        <div className="mt-10 overflow-x-auto shadow-lg">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Exchange</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Change percent</th>
                    <th>Dividend</th>
                    <th>Yield</th>
                    <th>Last trade time</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {watchList.map(watchElement => <WatchElement key={watchElement.ticker} watchElement={watchElement}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default WatchList;
