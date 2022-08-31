import {renderWithRedux} from "../renderWithRedux";
import {screen} from "@testing-library/react";
import React from "react";
import Error from "../../components/Error/Error";

describe("error component", () => {

    test("should take prop and render correctly", () => {
        let error = "No tickers"
        renderWithRedux(<Error error={error}/>);
        expect(screen.getByText(`Error: ${error}`)).toBeInTheDocument();
    })
})