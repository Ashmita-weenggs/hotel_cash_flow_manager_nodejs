import { app } from './app';

const PORT = 3003;

async function main() {
	try {
		app.listen({ port: PORT });
		// console.log(`Server running on ${address}\n`);
	} catch (error) {
		app.log.error(error);
		process.exit(1); //this will be used to restart the server when error crashes
	}
}

main();
