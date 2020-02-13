import { Schema, model } from 'mongoose';

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

workoutSchema.virtual('totalDuration').get(
	() => this.exercises.reduce((total, exercise) => total + exercise.duration, 0),
);

export default model('Workout', workoutSchema);
