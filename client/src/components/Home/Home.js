import SearchTicker from "./SearchTicker/SearchTicker";
import Tickers from "./Tickers/Tickers";
import WatchList from "./WatchList/WatchList";
import {useSelector} from "react-redux";

const Home = () => {

    const settingsModalData = useSelector(state => state.settingsModal);

    return (
        <div className="w-5/6 mx-auto">
            <div className={settingsModalData.showTickers ? "block" : "hidden"} data-testid="search-and-tickers">
                <SearchTicker/>
                <Tickers/>
            </div>
            <div className={settingsModalData.showWatchList ? "block" : "hidden"} data-testid="watch-list">
                <WatchList/>
            </div>
        </div>
    )
}

export default Home;
