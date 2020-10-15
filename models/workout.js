  
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            enum: ['Weight Lifting', 'Cardio'],
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        weight: {
            type: Number,
            required: function () {
                return this.type === "Weight Lifting"
            }
        },
        sets: {
            type: Number,
            required: function () {
                return this.type === "Weight Lifting"
            }
        },
        reps: {
            type: Number,
            required: function () {
                return this.type === "Weight Lifting"
            }
        },
        duration: {
            type: String,
            required: true
        },
        distance: {
            type: Number,
            required: function () {
                return this.type === "Cardio"
            }
        }
    }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;