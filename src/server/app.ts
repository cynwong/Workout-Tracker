
import express from 'express';
import * as path from 'path';

import { apiRoutes } from './routes/api';

const app:express.Application = express();

// Middle-wares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	(
		req: express.Request,
		_res: express.Response,
		next: express.NextFunction
	) => {
		console.info(`${req.method} ${req.path}`);
		next();
	}
)

// setup ejs
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/assets/', express.static(path.resolve(__dirname,'public','assets')));

app.get('/', (_req:express.Request, res: express.Response) => {
	res.render('index');
});
app.get('/exercise', (_req:express.Request, res: express.Response) => {
	res.render('exercise');
});

app.get('/stats', (_req:express.Request, res: express.Response) => {
	res.render('stats');
});

app.use('/api/workouts', apiRoutes);

app.use("*", (_req:express.Request, res: express.Response) => {
	res.redirect('/');
});

export { app };

