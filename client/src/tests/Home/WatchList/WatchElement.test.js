import {renderWithRedux} from "../../renderWithRedux";
import {ticker, tickersHistoryDown, tickersHistoryUp, tickersMid, tickersShort} from "../../constsForTesting";
import {screen} from "@testing-library/react";
import React from "react";
import WatchElement from "../../../components/Home/WatchList/WatchElement";
import Home from "../../../components/Home/Home";
import userEvent from "@testing-library/user-event";

describe("watch element component", () => {

    test("should take prop and render correctly", () => {
        renderWithRedux(
            <table>
                <tbody>
                <WatchElement watchElement={ticker}/>
                </tbody>
            </table>
        );
        expect(screen.getByRole("row", {
            name: `${ticker.ticker} ${ticker.exchange} up ${ticker.price} ${ticker.change} ${ticker.change_percent}% ${ticker.dividend} ${ticker.yield} ${ticker.last_trade_time.slice(0, 10)} ${ticker.last_trade_time.slice(11, 19)} remove`
        })).toBeInTheDocument();
        expect(screen.getByRole("img", {name: "up"})).toBeInTheDocument();
        expect(screen.getByRole("img", {name: "remove"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "remove"})).toBeInTheDocument();
    })

    test("should change indicator on down price change", () => {
        renderWithRedux(
            <table>
                <tbody>
                <WatchElement watchElement={ticker}/>
                </tbody>
            </table>, {
                initialState: {
                    tickersHistory: tickersHistoryDown
                }
            });
        expect(screen.getByRole("img", {name: "down"})).toBeInTheDocument();
    })

    test("should change indicator on up price change", () => {
        renderWithRedux(
            <table>
                <tbody>
                <WatchElement watchElement={ticker}/>
                </tbody>
            </table>, {
                initialState: {
                    tickersHistory: tickersHistoryUp
                }
            });
        expect(screen.getByRole("img", {name: "up"})).toBeInTheDocument();
    })

    test("should remove from watching list on button clicked", () => {
        let watchedTickers = [tickersMid.tickers[0].ticker, tickersMid.tickers[1].ticker];
        renderWithRedux(<Home/>, {
            initialState: {
                tickers: tickersMid,
                watchList: watchedTickers
            }
        });
        expect(screen.getByRole("row", {name: /AAPL/i})).toBeInTheDocument();
        expect(screen.getByRole("row", {name: /GOOGL/i})).toBeInTheDocument();
        expect(screen.queryByRole("row", {name: /MSFT/i})).not.toBeInTheDocument();
        let removeButtons = screen.getAllByRole("button", {name: "remove"});
        userEvent.click(removeButtons[1]); // first row button
        expect(screen.queryByRole("row", {name: /AAPL/i})).not.toBeInTheDocument();
        expect(screen.getByRole("row", {name: /GOOGL/i})).toBeInTheDocument();
        expect(screen.queryByRole("row", {name: /MSFT/i})).not.toBeInTheDocument();
    })
})