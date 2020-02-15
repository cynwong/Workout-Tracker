"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var workoutSchema = new mongoose_1.Schema({
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
}, {
    toJSON: {
        // include any virtual properties when data is requested
        virtuals: true,
    },
});
workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce(function (total, exercise) { return total + exercise.duration; }, 0);
});
;
;
exports.Workout = mongoose_1.model('Workout', workoutSchema);
