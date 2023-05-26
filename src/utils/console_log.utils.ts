export class Log {
	public static debug = (
		key: string,
		value: any,
		config?: { stringify?: boolean }
	) => {
		console.log(
			'\n[DEBUG]: ',
			key,
			' >>>> ',
			config?.stringify ? JSON.stringify(value) : value
		);
	};
	public static print = (
		key: string,
		value: any,
		config?: { stringify?: boolean }
	) => {
		console.log(
			'\n[LOG] ',
			key,
			' >>>> ',
			config?.stringify ? JSON.stringify(value) : value
		);
	};
}
