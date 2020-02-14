import connect from './connect';
import { app } from './server';


const PORT = process.env.PORT || 8080;

// init server
(async () => {
	try {
		await connect();
		app.listen(PORT, () => console.log(`App running on port ${PORT}`));
	} catch (err) {
		console.error(err);
	}
})(); 