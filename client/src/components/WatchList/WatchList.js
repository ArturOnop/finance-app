import WatchElement from "./WatchElement";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {clearWatchList, removeFromWatchList} from "../../redux/watchList/watchListAction";

const WatchList = () => {

    const watchListData = useSelector(state => state.watchList);
    const tickersData = useSelector(state => state.tickers);
    const dispatch = useDispatch();

    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        setWatchList(tickersData.tickers[0] ?
            tickersData.tickers.filter(ticker => watchListData.includes(ticker.ticker)) : []);
    }, [tickersData, watchListData])

    return (
        <>
            {watchList[0] ?
                <div className="my-10 overflow-x-auto shadow-lg">
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
                            <th>
                                <button
                                    className="w-8 h-8 sm:h-10 sm:w-10 rounded flex items-center
                                    justify-center shadow hover:bg-red-100"
                                    onClick={() => dispatch(clearWatchList())}>
                                    <img src="images/minus.svg" alt="remove" className="w-4 h-4"/>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {watchList.map(watchElement => <WatchElement key={watchElement.ticker}
                                                                     watchElement={watchElement}/>)}
                        </tbody>
                    </table>
                </div> : ""}
        </>
    )
}

export default WatchList;
