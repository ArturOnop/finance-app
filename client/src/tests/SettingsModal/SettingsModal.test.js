import {renderWithRedux} from "../renderWithRedux";
import {ticker, tickersShort} from "../constsForTesting";
import {fireEvent, screen} from "@testing-library/react";
import React from "react";
import App from "../../components/App";
import SettingsModal from "../../components/SettingsModal/SettingsModal";
import userEvent from "@testing-library/user-event";

describe("settings modal component", () => {

    test("should render correctly", () => {
        renderWithRedux(<SettingsModal/>, {
            initialState: {
                settingsModal: {
                    interval: 5000,
                    showTickers: true,
                    showWatchList: true
                }
            }
        });
        expect(screen.getByTestId("save-settings")).toBeInTheDocument();
        expect(screen.getByRole("checkbox", {name: "Show tickers"})).toBeInTheDocument();
        expect(screen.getByRole("checkbox", {name: "Show watchlist"})).toBeInTheDocument();
        expect(screen.getByRole("spinbutton")).toBeInTheDocument();
        expect(screen.getByRole("slider")).toBeInTheDocument();
    })

    test("should hide SearchTicker and Tickers component on 'Show tickers' checkbox change", () => {
        renderWithRedux(<App/>, {
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
        let saveButton = screen.getByTestId("save-settings");
        let tickersCheckbox = screen.getByRole("checkbox", {name: "Show tickers"});

        userEvent.click(tickersCheckbox);

        expect(tickersCheckbox).not.toBeChecked()

        userEvent.click(saveButton);

        expect(screen.getByTestId("search-and-tickers").classList).toContain("hidden");
        expect(screen.getByTestId("watch-list").classList).toContain("block");
    })

    test("should hide WatchList component on 'Show watchlist' checkbox change", () => {
        renderWithRedux(<App/>, {
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
        let saveButton = screen.getByTestId("save-settings");
        let watchListCheckbox = screen.getByRole("checkbox", {name: "Show watchlist"});

        userEvent.click(watchListCheckbox);

        expect(watchListCheckbox).not.toBeChecked()

        userEvent.click(saveButton);

        expect(screen.getByTestId("search-and-tickers").classList).toContain("block");
        expect(screen.getByTestId("watch-list").classList).toContain("hidden");
    })

    test("should hide all components on 'Show watchlist' and 'Show watchlist' checkbox change", () => {
        renderWithRedux(<App/>, {
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
        let saveButton = screen.getByTestId("save-settings");
        let tickersCheckbox = screen.getByRole("checkbox", {name: "Show tickers"});
        let watchListCheckbox = screen.getByRole("checkbox", {name: "Show watchlist"});

        userEvent.click(tickersCheckbox);
        userEvent.click(watchListCheckbox);

        expect(tickersCheckbox).not.toBeChecked()
        expect(watchListCheckbox).not.toBeChecked()

        userEvent.click(saveButton);

        expect(screen.getByTestId("search-and-tickers").classList).toContain("hidden");
        expect(screen.getByTestId("watch-list").classList).toContain("hidden");
    })

    test("should change fetch interval on slider change", () => {
        renderWithRedux(<App/>, {
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
        let intervalSlider = screen.getByRole("slider");

        fireEvent.change(intervalSlider, {target: {value: "10"}});
        expect(intervalSlider.value).toBe("10");
    })
})