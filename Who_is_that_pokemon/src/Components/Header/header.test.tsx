import Header from ".";
import renderWithRouter from "../../Helpers/renderWithRouter";
import { screen } from "@testing-library/react";

describe("Headers", () => {
	it("Header renders as expected", () => {
		renderWithRouter(<Header />);
		const headerHomeTitle = screen.getByText("Home Page");
		const headerPokedexTitle = screen.getByText("Pokedex");
		const headerGameTitle = screen.getByText("Game");
		const homeIcon = screen.getByAltText("pikachu");
		const pokedexIcon = screen.getByAltText("pokeball");
		const gameIcon = screen.getByAltText("gameboy");
		expect(headerHomeTitle).toBeInTheDocument();
		expect(headerPokedexTitle).toBeInTheDocument();
		expect(headerGameTitle).toBeInTheDocument();
		expect(homeIcon).toBeInTheDocument();
		expect(pokedexIcon).toBeInTheDocument();
		expect(gameIcon).toBeInTheDocument();
	});
});
