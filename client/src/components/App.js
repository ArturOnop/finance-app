import Navbar from "./Navbar/Navbar";
import TickersHistory from "./TickersHistory/TickersHistory";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import {useEffect} from "react";
import {getTickers} from "../redux/tickers/tickersAction";
import {socket} from "../socket/socket";
import {useDispatch} from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickers());
        return () => socket.close();
    }, []);

    return (
        <div className="App ">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tickers-history" element={<TickersHistory/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App;
