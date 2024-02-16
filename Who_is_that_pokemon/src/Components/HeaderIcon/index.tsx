import { NavLink } from "react-router-dom";
import { ButtonFooter, HomePageButton, Icon } from "../style";

interface IHeaderProps {
	name: string;
	defaultColor: string;
	footerColor: string;
	icon: string;
	navigateTo: string;
	alt: string;
	direction?: string;
}

export default function HeaderIcon({
	name,
	defaultColor,
	footerColor,
	icon,
	direction,
	navigateTo,
	alt,
}: IHeaderProps) {
	return (
		<NavLink to={navigateTo}>
			<HomePageButton $background={defaultColor}>
				<Icon alt={alt} src={icon} />
				<div>{name}</div>
				<ButtonFooter $background={footerColor} $direction={direction} />
			</HomePageButton>
		</NavLink>
	);
}
