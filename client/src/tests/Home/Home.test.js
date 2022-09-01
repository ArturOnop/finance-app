import {renderWithRedux} from "../renderWithRedux";
import {screen} from "@testing-library/react";
import React from "react";
import Home from "../../components/Home/Home";
import {ticker, tickersShort} from "../constsForTesting";

describe("home component", () => {

    test("should show all components on default", () => {
        renderWithRedux(<Home/>, {
            initialState: {
                tickers: tickersShort,
                watchList: [ticker.ticker],
                settingsModal: {
                    interval: 5000,
                    showTickers: true,
                    showWatchList: true
                }
            }
        });
        expect(screen.getByTestId("search-and-tickers").classList).toContain("block");
        expect(screen.getByTestId("watch-list").classList).toContain("block");
    })

    test("should show only SearchTicker and Tickers component on WatchList hidden", () => {
        renderWithRedux(<Home/>, {
            initialState: {
                tickers: tickersShort,
                watchList: [ticker.ticker],
                settingsModal: {
                    interval: 5000,
                    showTickers: true,
                    showWatchList: false
                }
            }
        });
        expect(screen.getByTestId("search-and-tickers").classList).toContain("block");
        expect(screen.getByTestId("watch-list").classList).toContain("hidden");
    })

    test("should show only WatchList component on SearchTicker and Tickers hidden", () => {
        renderWithRedux(<Home/>, {
            initialState: {
                tickers: tickersShort,
                watchList: [ticker.ticker],
                settingsModal: {
                    interval: 5000,
                    showTickers: false,
                    showWatchList: true
                }
            }
        });
        expect(screen.getByTestId("search-and-tickers").classList).toContain("hidden");
        expect(screen.getByTestId("watch-list").classList).toContain("block");
    })

    test("should show nothing on all components hidden", () => {
        renderWithRedux(<Home/>, {
            initialState: {
                tickers: tickersShort,
                watchList: [ticker.ticker],
                settingsModal: {
                    interval: 5000,
                    showTickers: false,
                    showWatchList: false
                }
            }
        });
        expect(screen.getByTestId("search-and-tickers").classList).toContain("hidden");
        expect(screen.getByTestId("watch-list").classList).toContain("hidden");
    })
})