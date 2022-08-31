import {renderWithRedux} from "../renderWithRedux";
import {screen} from "@testing-library/react";
import React from "react";
import WatchList from "../../components/Home/WatchList/WatchList";
import {noTickers, tickers} from "./WatchList.test.const";
import userEvent from "@testing-library/user-event";

describe("watch list component", () => {

    test("should render watching tickers", () => {
        renderWithRedux(<WatchList/>, {
            initialState: {
                tickers: tickers,
                watchList: [tickers.tickers[0].ticker, tickers.tickers[1].ticker]
            }
        });
        expect(screen.getByText(tickers.tickers[0].ticker)).toBeInTheDocument();
        expect(screen.getByText(tickers.tickers[1].ticker)).toBeInTheDocument();
        expect(screen.queryByText(tickers.tickers[2].ticker)).not.toBeInTheDocument();
    })

    test("should not render if no tickers downloaded", () => {
        renderWithRedux(<WatchList/>, {
            initialState: {
                tickers: noTickers
            }
        });
        expect(screen.queryByRole("table")).not.toBeInTheDocument();
    })

    test("should clear all on minus button click", () => {
        renderWithRedux(<WatchList/>, {
            initialState: {
                tickers: tickers,
                watchList: [tickers.tickers[0].ticker]
            }
        });
        expect(screen.getByRole("table")).toBeInTheDocument();
        let removeButton = screen.getByTestId("remove-all-watchlist");
        userEvent.click(removeButton);
        expect(screen.queryByRole("table")).not.toBeInTheDocument();
    })
})