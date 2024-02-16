import "./header.css";
import pikachu_logo from "../../Images/game_14079542.png";
import pokedex_logo from "../../Images/pokeball_287221.png";
import gameboy_logo from "../../Images/gameboy_626592.png";
import { NavBar } from "../Header/style";
import HeaderIcon from "../HeaderIcon";

export default function Header() {
	return (
		<NavBar>
			<HeaderIcon
				name="Home Page"
				defaultColor="white"
				footerColor="lightgray"
				icon={pikachu_logo}
				alt="pikachu"
				direction="left"
				navigateTo="/"
			/>
			<HeaderIcon
				name="Pokedex"
				defaultColor="white"
				footerColor="red"
				icon={pokedex_logo}
				alt="pokeball"
				navigateTo="/pokedex"
			/>
			<HeaderIcon
				name="Game"
				defaultColor="white"
				footerColor="yellow"
				icon={gameboy_logo}
				alt="gameboy"
				direction="right"
				navigateTo="/game"
			/>
		</NavBar>
	);
}
