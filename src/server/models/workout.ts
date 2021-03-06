import { Document, model, Model, Schema } from 'mongoose';

const workoutSchema:Schema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					trim: true,
					required: 'Enter an exercise type',
				},
				name: {
					type: String,
					trim: true,
					required: 'Enter an exercise name',
				},
				duration: {
					type: Number,
					required: 'Enter an exercise duration in minutes',
				},
				weight: {
					type: Number,
				},
				reps: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				distance: {
					type: Number,
				},
			},
		],
	},
	{
		toJSON: {
			// include any virtual properties when data is requested
			virtuals: true,
		},
	},
);

workoutSchema.virtual('totalDuration').get(function (this:iWorkout) {
		return this.exercises.reduce((total:number, exercise:any) => total + exercise.duration, 0); 
	},
);

interface exercise {
	type: string,
	name: string,
	duration:number,
	weight: number,
	reps: number,
	sets: number,
	distance:number,
};

export interface iWorkout extends Document {
	day: Date,
	exercises: exercise[],
	totalDuration: number,
};

export const Workout: Model<iWorkout> = model<iWorkout>('Workout', workoutSchema);

