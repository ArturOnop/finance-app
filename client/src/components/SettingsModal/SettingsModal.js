import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeSettings} from "../../redux/settingsModal/settingsModalActions";

const SettingsModal = () => {
    const settingsModalData = useSelector(state => state.settingsModal);
    const dispatch = useDispatch();

    const [interval, setInterval] = useState(5); //in sec
    const [showTickers, setShowTickers] = useState(true);
    const [showWatchList, setShowWatchList] = useState(true);

    useEffect(() => {
        setInterval(settingsModalData.interval / 1000);
        setShowTickers(settingsModalData.showTickers);
        setShowWatchList(settingsModalData.showWatchList);
    }, [])

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle"/>
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between">
                            <div className="text-xl">Update interval 1-60 s</div>
                            <input className="input input-sm w-24 shadow"
                                   type="number"
                                   value={interval}
                                   disabled/>
                        </div>
                        <div>
                            <input type="range"
                                   min="1"
                                   max="60"
                                   value={interval}
                                   className="range"
                                   step="1"
                                   onChange={e => setInterval(Number(e.target.value))}/>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Show tickers</span>
                                <input type="checkbox" className="toggle" checked={showTickers}
                                       onChange={() => setShowTickers(!showTickers)}/>
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Show watchlist</span>
                                <input type="checkbox" className="toggle" checked={showWatchList}
                                       onChange={() => setShowWatchList(!showWatchList)}/>
                            </label>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6"
                               className="btn"
                               onClick={() => dispatch(changeSettings({
                                   interval: interval * 1000,
                                   showTickers: showTickers,
                                   showWatchList: showWatchList
                               }))}>
                            Save
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;
