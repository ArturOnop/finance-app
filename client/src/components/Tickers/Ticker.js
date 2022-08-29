import {useDispatch, useSelector} from "react-redux";
import ChangeIndicator from "./ChangeIndicator";
import {useEffect, useState} from "react";
import {addToWatchList} from "../../redux/watchList/watchListAction";

const Ticker = ({ticker}) => {
    const tickerPrevData = useSelector(state => {
        if (!state.tickersHistory[1]) return;
        return state.tickersHistory[1].filter(el => ticker.ticker === el.ticker)[0];
    });
    const dispatch = useDispatch();

    const [indicator, setIndicator] = useState("Up");

    useEffect(() => {
        if (!tickerPrevData) return;
        setIndicator(tickerPrevData.price > ticker.price ? "Down" : "Up");
    }, [tickerPrevData])

    return (
        <div className="
        outline outline-1 outline-primary/20 rounded
        flex items-center gap-2 bg-white
        py-1 px-2">
            <ChangeIndicator indicator={indicator}/>
            <div className="flex flex-col justify-between h-full">
                <div className="text-lg font-bold">{ticker.ticker}</div>
                <div>{ticker.price}</div>
            </div>
            <div
                className={`flex flex-col justify-between h-full 
                    ${indicator === "Up" ? "text-green-600" : "text-red-600"}`}>
                <div>{ticker.change}</div>
                <div>{ticker.change_percent}%</div>
            </div>
            <button className="h-10 w-10 rounded flex items-center justify-center shadow hover:bg-black/10"
                    onClick={() => dispatch(addToWatchList(ticker.ticker))}>
                <img src="images/plus.svg" alt="add" className="w-4 h-4"/>
            </button>
        </div>
    )
}

export default Ticker;
