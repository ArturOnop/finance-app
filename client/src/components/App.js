import Tickers from "./Tickers/Tickers";
import WatchList from "./WatchList/WatchList";
import SearchTicker from "./SearchTicker/SearchTicker";
import Header from "./Header/Header";
import SettingsModal from "./SettingsModal/SettingsModal";
import {useSelector} from "react-redux";

const App = () => {
    const settingsModalData = useSelector(state => state.settingsModal);

    return (
        <div className="App ">
            <Header/>
            <div className="w-5/6 mx-auto">
                <div className={settingsModalData.showTickers ? "block" : "hidden"}>
                    <SearchTicker/>
                    <Tickers/>
                </div>
                <div className={settingsModalData.showWatchList ? "block" : "hidden"}>
                    <WatchList/>
                </div>
            </div>
            <SettingsModal/>
        </div>
    );
}

export default App;
