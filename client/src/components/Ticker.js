import {useSelector} from "react-redux";
import ChangeIndicator from "./ChangeIndicator";
import {useEffect, useState} from "react";

const Ticker = ({ticker}) => {
    const tickerPrevData = useSelector(state => {
        if (!state.tickersHistory[1]) return;
        return state.tickersHistory[1].filter(el => ticker.ticker === el.ticker)[0];
    });

    const [indicator, setIndicator] = useState("Up");

    useEffect(() => {
        if (!tickerPrevData) return;
        setIndicator(tickerPrevData.price > ticker.price ? "Down" : "Up");
    }, [tickerPrevData])

    return (
        <div className="
        outline outline-1 outline-primary/20 rounded
        flex items-center gap-2
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
        </div>
    )
}

export default Ticker;
