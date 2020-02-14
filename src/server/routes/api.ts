import { Router, Request, Response } from 'express';

const router: Router = Router();

// get workout model
import { Workout } from '../models';

router.get('/workouts', async (_req: Request, res: Response) => {
	try {
		const result = await Workout.find({});
		// console.log(result);
		return res.json(result);
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			error: 'Something wrong in retrieving data',
		});
	}
	
});

export const apiRoutes = router;
