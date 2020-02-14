import { Router, Request, Response } from 'express';

const router: Router = Router();

// get workout model
import { Workout } from '../models';
import { ObjectId } from 'mongodb';

const errorResponse = (res:Response, err) =>{
	console.error(err);
	return res.status(500).json({
		error: 'Something wrong in retrieving data',
	});
}

router.get('/workouts/last', async (_req: Request, res: Response) => {
	try {
		const result = await Workout.find({}).sort({_id: -1}).limit(1);
		return res.json(result);
	} catch (error) {
		errorResponse(res,error);
	}
});

router.put('/workouts/:id', async (req: Request, res: Response) => {
	try {
		const { 
			params: { id },
			body
		} = req;
		const objId = new ObjectId(id);
		const workout = await Workout.findOne({_id:objId });
		workout.exercises.push(body);
		workout.save();
		return res.json({
			success: true,
		});
	} catch (err) {
		errorResponse(res,err);
	}
});

export const apiRoutes = router;
