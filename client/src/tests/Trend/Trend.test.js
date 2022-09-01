import {renderWithRedux} from "../renderWithRedux";
import {errorTickers, tickersMid} from "../constsForTesting";
import {screen} from "@testing-library/react";
import React from "react";
import Trend from "../../components/Trend/Trend";

describe("trend component", () => {

    test("should render correctly", () => {
        renderWithRedux(<Trend/>, {
            initialState: {
                tickers: tickersMid
            }
        });
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByRole("row", {name: "2021-04-30 11:53:21 259.3 126.8 0.4"})).toBeInTheDocument();
    })

    test("should render initial if no tickers found", () => {
        renderWithRedux(<Trend/>, {
            initialState: {
                tickers: errorTickers
            }
        });
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByRole("row", {name: "0 0 0"})).toBeInTheDocument();
    })
})