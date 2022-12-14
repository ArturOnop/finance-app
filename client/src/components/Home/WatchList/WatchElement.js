import {removeFromWatchList} from "../../../redux/watchList/watchListAction";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ChangeIndicator from "../Tickers/ChangeIndicator";

const WatchElement = ({watchElement}) => {

    const elementPrevData = useSelector(state => {
        if (!state.tickersHistory[1]) return;
        return state.tickersHistory[1].filter(el => watchElement.ticker === el.ticker)[0];
    });
    const dispatch = useDispatch();

    const [indicator, setIndicator] = useState("Up");

    useEffect(() => {
        if (!elementPrevData) return;
        setIndicator(elementPrevData.price > watchElement.price ? "Down" : "Up");
    }, [watchElement])

    return (
        <tr key={watchElement.ticker}>
            <th className="text-sm sm:text-base">{watchElement.ticker}</th>
            <td className="text-sm sm:text-base">{watchElement.exchange}</td>
            <td className={`flex items-center gap-3 ${indicator === "Down" ? "text-red-600" : "text-green-600"}`}>
                <ChangeIndicator indicator={indicator}/>
                <div>{watchElement.price}</div>
            </td>
            <td className={`text-sm sm:text-base-md ${indicator === "Down" ? "text-red-600" : "text-green-600"}`}>
                {watchElement.change}
            </td>
            <td className={`text-sm sm:text-base-md ${indicator === "Down" ? "text-red-600" : "text-green-600"}`}>
                {watchElement.change_percent}%
            </td>
            <td className="text-sm sm:text-base">{watchElement.dividend}</td>
            <td className="text-sm sm:text-base">{watchElement.yield}</td>
            <td className="text-sm sm:text-base">{`${watchElement.last_trade_time.slice(0, 10)} ${watchElement.last_trade_time.slice(11, 19)}`}</td>
            <td>
                <button
                    className="w-8 h-8 sm:h-10 sm:w-10 rounded flex items-center justify-center shadow hover:bg-red-100"
                    onClick={() => dispatch(removeFromWatchList(watchElement.ticker))}>
                    <img src="images/minus.svg" alt="remove" className="w-4 h-4"/>
                </button>
            </td>
        </tr>

    )
}

export default WatchElement;
