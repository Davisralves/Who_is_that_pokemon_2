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
