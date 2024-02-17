import styled from "styled-components";

export const HomePageButton = styled.div<{ $background?: string }>`
	background-color: ${(props) => props.$background};
	width: 150px;
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;

	&:hover {
		filter: invert(0.1);
	}

	@media (max-width: 600px) {
		width: 100px;
		height: 100px;
	}
`;

export const Icon = styled.img<{ $invert?: number }>`
	position: relative;
	display: block;
	padding-bottom: 10px;
	width: 64px;
	@media (max-width: 600px) {
		width: 32px;
	}
`;

export const ButtonFooter = styled.div<{
	$background?: string;
	$direction?: string;
}>`
	background-color: ${(props) => props.$background};
	width: 100%;
	height: 8px;
	margin-top: 4px;
	border-bottom-left-radius: ${(props) => {
		if (props.$direction === "left") {
			return "8px";
		}
		return "0px";
	}};
	border-bottom-right-radius: ${(props) => {
		if (props.$direction === "right") {
			return "8px";
		}
		return "0px";
	}};
`;
