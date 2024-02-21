function getWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

function getHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.documentElement.clientHeight
	);
}

export function getPokeBallsQuantity(pokeballSize: number) {
	const width = getWidth() - 200;
	const height = getHeight() - 100;
	const pokeballSpace = pokeballSize * 2;
	console.log(width, height, pokeballSpace);
	return Math.ceil((width / pokeballSpace) * 2 * (height / pokeballSpace));
}
