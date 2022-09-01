import {renderWithRedux} from "../../renderWithRedux";
import {screen} from "@testing-library/react";
import React from "react";
import WatchList from "../../../components/Home/WatchList/WatchList";
import {errorTickers, tickersFull} from "../../constsForTesting";
import userEvent from "@testing-library/user-event";

describe("watch list component", () => {

    test("should render watching tickers", () => {
        renderWithRedux(<WatchList/>, {
            initialState: {
                tickers: tickersFull,
                watchList: [tickersFull.tickers[0].ticker, tickersFull.tickers[1].ticker]
            }
        });
        expect(screen.getByText(tickersFull.tickers[0].ticker)).toBeInTheDocument();
        expect(screen.getByText(tickersFull.tickers[1].ticker)).toBeInTheDocument();
        expect(screen.queryByText(tickersFull.tickers[2].ticker)).not.toBeInTheDocument();
    })

    test("should not render if no tickers downloaded", () => {
        renderWithRedux(<WatchList/>, {
            initialState: {
                tickers: errorTickers
            }
        });
        expect(screen.queryByRole("table")).not.toBeInTheDocument();
    })

    test("should clear all on minus button click", () => {
        renderWithRedux(<WatchList/>, {
            initialState: {
                tickers: tickersFull,
                watchList: [tickersFull.tickers[0].ticker]
            }
        });
        expect(screen.getByRole("table")).toBeInTheDocument();
        let removeButton = screen.getByTestId("remove-all-watchlist");
        userEvent.click(removeButton);
        expect(screen.queryByRole("table")).not.toBeInTheDocument();
    })
})