import Ticker from "../../../components/Home/Tickers/Ticker";
import React from "react";
import {renderWithRedux} from "../../renderWithRedux";
import {tickersShort, ticker, tickersHistoryUp, tickersHistoryDown} from "../../constsForTesting";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../../../components/Home/Home";

describe("ticker component", () => {

    test("should take props and render correctly", () => {
        renderWithRedux(<Ticker ticker={ticker}/>);
        expect(screen.getByText(ticker.ticker)).toBeInTheDocument();
        expect(screen.getByText(ticker.price)).toBeInTheDocument();
        expect(screen.getByText(ticker.change)).toBeInTheDocument();
        expect(screen.getByText(`${ticker.change_percent}%`)).toBeInTheDocument();
        expect(screen.getByRole("img", {name: "up"})).toBeInTheDocument();
        expect(screen.getByRole("img", {name: "add"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "add"})).toBeInTheDocument();
    })

    test("should change indicator on down price change", () => {
        renderWithRedux(<Ticker ticker={ticker}/>, {
            initialState: {
                tickersHistory: tickersHistoryDown
            }
        });
        expect(screen.getByRole("img", {name: "down"})).toBeInTheDocument();
    })

    test("should change indicator on up price change", () => {
        renderWithRedux(<Ticker ticker={ticker}/>, {
            initialState: {
                tickersHistory: tickersHistoryUp
            }
        });
        expect(screen.getByRole("img", {name: "up"})).toBeInTheDocument();
    })

    test("should add to watching list on button clicked", () => {
        renderWithRedux(<Home/>, {
            initialState: {
                tickers: tickersShort
            }
        });
        let addButton = screen.getByRole("button", {name: "add"});
        userEvent.click(addButton);
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByRole("row", {
            name: `${ticker.ticker} ${ticker.exchange} up ${ticker.price} ${ticker.change} ${ticker.change_percent}% ${ticker.dividend} ${ticker.yield} ${ticker.last_trade_time.slice(0, 10)} ${ticker.last_trade_time.slice(11, 19)} remove`
        })).toBeInTheDocument();
    })

})