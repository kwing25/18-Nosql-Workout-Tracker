const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "You must insert an exercise type",
        },
        name: {
            type: String,
            trim: true,
            required: "You must insert an exercise name",
        },
        duration: {
            type: Number,
            trim: true,
            required: "You must insert a duration in number of minutes",
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
    }]
})

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;