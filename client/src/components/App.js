import Tickers from "./Tickers/Tickers";
import WatchList from "./WatchList/WatchList";

const App = () => {

    return (
        <div className="App w-5/6 mx-auto">
            <Tickers/>
            <WatchList/>
        </div>
    );
}

export default App;
