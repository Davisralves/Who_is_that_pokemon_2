import styled from "styled-components";
import forestBackground from "../Images/craiyon_100114_forest_background.png";
import beachBackground from "../Images/beach_background.jpg";
import lavaBackGround from "../Images/lava_background.jpg";

const defaultBorderShadown = `inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
0.3em 0.3em 1em rgba(0, 0, 0, 0.3)`;
const selectedBorderShadown = `inset 0 3em 3em gold, 0 0 0 2px gold,
0.3em 0.3em 1em gold`;

const hoverBorderShadown = `inset 0 -1em 5em lavender, 0 0 0 2px rgb(190, 190, 190),
0.3em 0.3em 1em rgba(0, 0, 0, 0.3)`;

const pokeballSizePixel = "30px";

export const MainDiv = styled.div`
	display: block;
	text-align: center;
`;
export const Footer = styled.footer`
	width: 100%;
	position: absolute;
	padding-top: 3em;
`;

export const CentralizedLink = styled.a`
	display: block;
	width: 100%;
	text-align: center;
`;

export const CardWithShadown = styled.div<{ $animate?: boolean }>`
	margin: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 100px;
	height: 150px;
	object-fit: contain;

	border-radius: 10px;
	transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	box-shadow: ${(props) =>
		props.$animate ? selectedBorderShadown : defaultBorderShadown};
	transform: rotate(${(props) => (props.$animate ? 90 : 0)}deg);
	transform: scaleX(${(props) => (props.$animate ? -1 : 1)});
	transition: 0.8s;
	&:hover {
		box-shadow: ${(props) =>
			props.$animate ? selectedBorderShadown : hoverBorderShadown};
	}
`;

export const SubTitle = styled.h3`
	text-align: center;
`;

export const FlexComponent = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

export const BullbasaurCard = styled(CardWithShadown)`
	background-image: url(${forestBackground});
	background-size: cover;
`;

export const SquirtleCard = styled(CardWithShadown)`
	background-image: url(${beachBackground});
	background-size: cover;
`;

export const CharmanderCard = styled(CardWithShadown)`
	background-image: url(${lavaBackGround});
	background-size: cover;
`;

export const PokeballBackground = styled.img`
	width: 100px;
	background-color: red;
	border-radius: 30px;
`;

export const BackGround = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: absolute;
	z-index: -2;
`;

export const Pokeball = styled.div`
	--pokeball-size: ${pokeballSizePixel};
	display: block;
	filter: opacity(0.1);
	width: var(--pokeball-size);
	height: var(--pokeball-size);
	margin-right: var(--pokeball-size);
	margin-bottom: var(--pokeball-size);
	background: radial-gradient(
			white calc(var(--pokeball-size) / 12),
			black calc(var(--pokeball-size) / 11) calc(var(--pokeball-size) / 10.5),
			white calc(var(--pokeball-size) / 10) calc(var(--pokeball-size) / 8),
			black calc(var(--pokeball-size) / 7.7) calc(var(--pokeball-size) / 6),
			transparent calc(var(--pokeball-size) / 5.8)
		),
		linear-gradient(
			to bottom,
			red 0 calc(var(--pokeball-size) / 2.2),
			black calc(var(--pokeball-size) / 2.2) calc(var(--pokeball-size) / 1.85),
			white calc(var(--pokeball-size) / 1.85) 100%
		);
	background-repeat: repeat-y;
	border-radius: 50%;
	border: calc(var(--pokeball-size) / 24) solid black;
	box-shadow: inset calc(-1 * var(--pokeball-size) / 12)
		calc(-1 * var(--pokeball-size) / 24) 0 0 rgba(0, 0, 0, 0.2);
	animation: fall 0.5s ease-in-out 1s,
		shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 1.5s 3,
		catch 0.5s ease-out 5.25s forwards;
`;
