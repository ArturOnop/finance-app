import {CHANGE_INTERVAL} from "./settingsModalType";
import {socket} from "../../socket/socket";

export const changeIntervalSuccess = interval => {
    return {
        type: CHANGE_INTERVAL,
        payload: interval
    }
}

export const changeInterval = interval => {
    return (dispatch) => {
        socket.emit("changeInterval", interval, res => {
            if (res === "Success") dispatch(changeIntervalSuccess(interval));
        });
    }
}