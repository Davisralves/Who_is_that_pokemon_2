import { ButtonFooter, HomePageButton, Icon } from "../style";

interface IHeaderProps {
	name: string;
	defaultColor: string;
	footerColor: string;
	icon: string;
	direction?: string;
}

export default function HeaderIcon({
	name,
	defaultColor,
	footerColor,
	icon,
	direction,
}: IHeaderProps) {
	return (
		<HomePageButton $background={defaultColor}>
			<Icon src={icon} />
			<div>{name}</div>
			<ButtonFooter $background={footerColor} $direction={direction} />
		</HomePageButton>
	);
}
