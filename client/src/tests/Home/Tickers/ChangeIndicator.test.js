import {renderWithRedux} from "../../renderWithRedux";
import {screen} from "@testing-library/react";
import React from "react";
import ChangeIndicator from "../../../components/Home/Tickers/ChangeIndicator";

describe("change indicator component", () => {

    test("should take 'Up' prop and render 'Up' indicator", () => {
        let indicator = "Up"
        renderWithRedux(<ChangeIndicator indicator={indicator}/>);
        expect(screen.getByAltText("up")).toBeInTheDocument();
    })

    test("should take 'Down' prop and render 'Down' indicator", () => {
        let indicator = "Down"
        renderWithRedux(<ChangeIndicator indicator={indicator}/>);
        expect(screen.getByAltText("down")).toBeInTheDocument();
    })
})