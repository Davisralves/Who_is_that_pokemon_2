import "./header.css";
import pikachu_logo from "../../images/game_14079542.png";
import pokedex_logo from "../../images/pokeball_287221.png";
import gameboy_logo from "../../images/gameboy_626592.png";
import { useLocation } from "react-router-dom";
import { NavBar } from "../Header/style";
import HeaderIcon from "../HeaderIcon";

export default function Header() {
	const { pathname } = useLocation();
	let homePageNavColor = "white";
	let homePageFooterColor = "lightgray";
	// if (pathname == "/") {
	// 	homePageNavColor = "lightgray";
	// 	homePageFooterColor = "white";
	// }
	return (
		<NavBar>
			<HeaderIcon
				name="Home Page"
				defaultColor="white"
				footerColor="lightgray"
				icon={pikachu_logo}
				direction="left"
			/>
			<HeaderIcon
				name="Pokedex"
				defaultColor="white"
				footerColor="red"
				icon={pokedex_logo}
			/>
			<HeaderIcon
				name="Game"
				defaultColor="white"
				footerColor="yellow"
				icon={gameboy_logo}
				direction="right"
			/>
		</NavBar>
	);
}
