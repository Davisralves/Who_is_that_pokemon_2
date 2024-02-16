import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import renderWithRouter from "../Helpers/renderWithRouter";

test("renders learn react link", () => {
	renderWithRouter(<App />);
	const linkElement = screen.getByText(/home page/i);
	expect(linkElement).toBeInTheDocument();
});
