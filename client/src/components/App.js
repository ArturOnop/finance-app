import Tickers from "./Tickers/Tickers";
import WatchList from "./WatchList/WatchList";
import SearchTicker from "./SearchTicker/SearchTicker";
import Header from "./Header/Header";
import SettingsModal from "./SettingsModal/SettingsModal";

const App = () => {

    return (
        <div className="App ">
            <Header/>
            <div className="w-5/6 mx-auto">
                <SearchTicker/>
                <Tickers/>
                <WatchList/>
            </div>
            <SettingsModal/>
        </div>
    );
}

export default App;
