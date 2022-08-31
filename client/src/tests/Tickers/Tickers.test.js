import React from "react";
import {renderWithRedux} from "../renderWithRedux";
import {screen} from "@testing-library/react";
import Tickers from "../../components/Home/Tickers/Tickers";
import {errorTickers, tickers} from "./Tickers.test.const";

describe("tickers component", () => {

    test("should render correctly", () => {
        renderWithRedux(<Tickers/>, {
            initialState: {
                tickers: tickers,
                searchTicker: ""
            }
        });
        expect(screen.getAllByRole("button")).toHaveLength(3);
        expect(screen.getByText(tickers.tickers[0].ticker)).toBeInTheDocument();
        expect(screen.getByText(tickers.tickers[1].ticker)).toBeInTheDocument();
        expect(screen.getByText(tickers.tickers[2].ticker)).toBeInTheDocument();
    })

    test("should render error", () => {
        renderWithRedux(<Tickers/>, {
            initialState: {
                tickers: errorTickers,
                searchTicker: ""
            }
        });
        expect(screen.getByTestId("error-alert")).toBeInTheDocument();
        expect(screen.getByText(`Error: ${errorTickers.error}`)).toBeInTheDocument();
    })

    test("should render loading", () => {
        renderWithRedux(<Tickers/>);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    })

})