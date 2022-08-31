import {applyMiddleware, createStore} from "redux";
import rootReducer from "../redux/rootReducer";
import thunk from "redux-thunk";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import React from "react";

export const renderWithRedux = (
    component,
    {initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk))} = {}
) => {
    return {
        ...render(<BrowserRouter><Provider store={store}>{component}</Provider></BrowserRouter>), store
    }
}