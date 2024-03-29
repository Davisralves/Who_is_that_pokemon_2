// ref https://testing-library.com/docs/example-react-router/#reducing-boilerplate
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ReactComponentElement } from "react";

const renderWithRouter = (
	ui: ReactComponentElement<any>,
	{ route = "/" } = {}
) => {
	window.history.pushState({}, "Test page", route);

	return render(ui, { wrapper: BrowserRouter });
};

export default renderWithRouter;
