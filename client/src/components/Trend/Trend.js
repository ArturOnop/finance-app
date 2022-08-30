import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const findAverage = (tickers, type) => {
    return +(tickers.map(ticker => Number(ticker[type]))
        .reduce((prev, value) => prev + value, 0) / tickers.length).toFixed(1)
}

const Trend = () => {

    const tickersData = useSelector(state => state.tickers);

    const [trend, setTrend] = useState({
        price: 0,
        change: 0,
        change_percent: 0,
        last_trade_time: ""
    })

    useEffect(() => {
        let tickers = tickersData.tickers;
        if (!tickers[0]) return;
        setTrend({
            price: findAverage(tickers, "price"),
            change: findAverage(tickers, "change"),
            change_percent: findAverage(tickers, "change_percent"),
            last_trade_time: tickers[0].last_trade_time
        })
    }, [tickersData])

    return (
        <div className="w-5/6 mx-auto">
            <div className="text-2xl sm:text-4xl my-5">Overall market trend</div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Last trade time</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Change percent</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>{`${trend.last_trade_time.slice(0, 10)} ${trend.last_trade_time.slice(11, 19)}`}</th>
                        <td>{trend.price}</td>
                        <td>{trend.change}</td>
                        <td>{trend.change_percent}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Trend;
