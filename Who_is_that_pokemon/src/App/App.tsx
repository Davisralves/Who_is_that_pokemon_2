import Header from "../Components/Header";
import {
	BackGround,
	BullbasaurCard,
	CentralizedLink,
	CharmanderCard,
	FlexComponent,
	Footer,
	MainDiv,
	Pokeball,
	PokeballBackground,
	SquirtleCard,
	SubTitle,
} from "./style";
import bullbasaur from "../Images/bullbasaur.png";
import squirtle from "../Images/squirtle.png";
import charmander from "../Images/charmander.png";
import { useState } from "react";
import "./style.css";
import { getPokeBallsQuantity } from "../Helpers/getPokeballsQuantity";

function App() {
	const [selectedPokemon, setSelectedPokemon] = useState("None");
	console.log(getPokeBallsQuantity(30));
	return (
		<main>
			<Header />
			<MainDiv>
				<BackGround>
					{Array(getPokeBallsQuantity(30))
						.fill(null)
						.map(() => (
							<Pokeball />
						))}
				</BackGround>

				<p>
					Hello, in this web app you can play a game to discover who is the
					pokemon drawn, also there is a pokedex to check and select the
					pokemons will be avaliable in the game.
				</p>
				<p>
					You can see my github repository in this{" "}
					<a
						href="https://github.com/Davisralves/Who_is_that_pokemon_2"
						target="_blank"
					>
						link
					</a>
				</p>
				<SubTitle>Choose your favorite starter pokemon !</SubTitle>
				<FlexComponent>
					<BullbasaurCard
						$animate={selectedPokemon == "bullbasaur"}
						onClick={() => setSelectedPokemon("bullbasaur")}
					>
						<img src={bullbasaur} />
					</BullbasaurCard>
					<SquirtleCard
						$animate={selectedPokemon == "squirtle"}
						onClick={() => setSelectedPokemon("squirtle")}
					>
						<img src={squirtle} />
					</SquirtleCard>
					<CharmanderCard
						$animate={selectedPokemon == "charmander"}
						onClick={() => setSelectedPokemon("charmander")}
					>
						<img src={charmander} />
					</CharmanderCard>
				</FlexComponent>
				<Footer>
					<CentralizedLink
						href="https://www.flaticon.com/free-icons/pokemon"
						title="pokemon icons"
					>
						Pokemon icons created by Roundicons Freebies - Flaticon
					</CentralizedLink>
				</Footer>
			</MainDiv>
		</main>
	);
}

export default App;
