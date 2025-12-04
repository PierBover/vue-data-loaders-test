export function wait():Promise<void> {
	const millis = Math.round(Math.random() * 2000);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, millis);
	});
}