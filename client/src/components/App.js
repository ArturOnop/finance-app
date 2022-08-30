import Navbar from "./Navbar/Navbar";
import Trend from "./Trend/Trend";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import {useEffect} from "react";
import {getTickers} from "../redux/tickers/tickersAction";
import {socket} from "../socket/socket";
import {useDispatch} from "react-redux";
import SettingsModal from "./SettingsModal/SettingsModal";

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
                <Route path="/trend" element={<Trend/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            <SettingsModal/>
        </div>
    );
}

export default App;
