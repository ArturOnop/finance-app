import {renderWithRedux} from "../renderWithRedux";
import {screen} from "@testing-library/react";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import App from "../../components/App";
import userEvent from "@testing-library/user-event";

describe("error navbar", () => {

    test("should render correctly", () => {
        renderWithRedux(<Navbar/>);
        expect(screen.getAllByRole("link")).toHaveLength(3);
        expect(screen.getByTestId("toggle-modal")).toBeInTheDocument();
        expect(screen.getByText("React Test Task")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Trend")).toBeInTheDocument();
    })

    test("should open settings modal on settings button click", () => {
        renderWithRedux(<App/>);
        let modalShow = screen.getByRole("checkbox", {name: "settings Save"});
        expect(modalShow).not.toBeChecked();
        userEvent.click(screen.getByTestId("toggle-modal"));
        expect(modalShow).toBeChecked();
    })
})