import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
	path: path.resolve(__dirname,'config','.env'),
})

export default( async () => {
	const {
		NODE_ENV: nodeEnv,
		LOCAL_DB_CONNECTION_URI: localDB,
		DB_CONNECTION_URI: db,
	} = process.env;
	console.info(`Using '${nodeEnv}' environment..`)
	const connectURI:any = nodeEnv === 'development' ? localDB : db;
	const connect = async () => {
		try {
			await mongoose.connect(
				connectURI,
				{
					useNewUrlParser: true,
					useFindAndModify:false,
					useUnifiedTopology: true,
				}
			);
			console.info('Successfully connected to Database.');
		} catch (error) {
			console.error('Error connecting to db: ', error);
		}
	};
	await connect();
	mongoose.connection.on('disconnected', connect);
});