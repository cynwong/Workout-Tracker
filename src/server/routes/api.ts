import { Router, Request, Response } from 'express';

const router: Router = Router();

// get workout model
import { Workout, iWorkout } from '../models';
import { ObjectId } from 'mongodb';

const errorResponse = (res:Response, err:any) =>{
	console.error(err);
	return res.status(500).json({
		error: 'Something wrong in retrieving data',
	});
}

router.get('/last', async (_req: Request, res: Response) => {
	try {
		const result = await Workout.find({}).sort({_id: -1}).limit(1);
		return res.json(result);
	} catch (error) {
		return errorResponse(res,error);
	}
});


router.get('/range', async (_req: Request, res: Response) => {
	try {
		const result = await Workout.find({});
		return res.json(result);
	} catch (error) {
		return errorResponse(res,error);
	}
});

router.put('/:id', async (req: Request, res: Response) => {
	try {
		const { 
			params: { id },
			body
		} = req;
		const objId = new ObjectId(id);
		const workout:iWorkout|null = await Workout.findOne({_id:objId });
		if(!workout) {
			return errorResponse(res,new Error('Workout not found'));
		}
		workout.exercises.push(body);
		workout.save();
		return res.json({
			success: true,
		});
	} catch (err) {
		return errorResponse(res,err);
	}
});



export const apiRoutes = router;
