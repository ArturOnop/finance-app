import Tickers from "./Tickers/Tickers";
import WatchList from "./WatchList/WatchList";
import SearchTicker from "./SearchTicker/SearchTicker";

const App = () => {

    return (
        <div className="App w-5/6 mx-auto">
            <SearchTicker/>
            <Tickers/>
            <WatchList/>
        </div>
    );
}

export default App;
