import {CHANGE_SETTINGS} from "./settingsModalType";
import {socket} from "../../socket/socket";

export const changeSettingsSuccess = settings => {
    return {
        type: CHANGE_SETTINGS,
        payload: settings
    }
}

export const changeSettings = settings => {
    return (dispatch) => {
        socket.emit("changeInterval", settings.interval);
        dispatch(changeSettingsSuccess(settings));
    }
}