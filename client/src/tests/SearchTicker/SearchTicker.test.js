import {renderWithRedux} from "../renderWithRedux";
import SearchTicker from "../../components/Home/SearchTicker/SearchTicker";
import {fireEvent, screen} from "@testing-library/react";
import Home from "../../components/Home/Home";
import {tickersMid} from "../constsForTesting";

describe("search ticker component", () => {

    test("should change on input", () => {
        renderWithRedux(<SearchTicker/>);
        let input = screen.getByRole("textbox");

        expect(input.value).toBe("");

        fireEvent.change(input, {target: {value: "AAPL"}});

        expect(input.value).toBe("AAPL");
        expect(screen.getByDisplayValue("AAPL")).toBeInTheDocument();
    })

    test("should update tickers on input", () => {
        renderWithRedux(<Home/>, {
            initialState: {
                tickers: tickersMid,
                searchTicker: ""
            }
        });
        expect(screen.getAllByRole("button")).toHaveLength(3);
        expect(screen.getByText(tickersMid.tickers[0].ticker)).toBeInTheDocument();
        expect(screen.getByText(tickersMid.tickers[1].ticker)).toBeInTheDocument();
        expect(screen.getByText(tickersMid.tickers[2].ticker)).toBeInTheDocument();

        let input = screen.getByRole("textbox");
        fireEvent.change(input, {target: {value: "AAPL"}});

        expect(screen.getAllByRole("button")).toHaveLength(1);
        expect(screen.getByText(tickersMid.tickers[0].ticker)).toBeInTheDocument();
        expect(screen.queryByText(tickersMid.tickers[1].ticker)).not.toBeInTheDocument();
        expect(screen.queryByText(tickersMid.tickers[2].ticker)).not.toBeInTheDocument();
    })
})