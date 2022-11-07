const mongoose = require('mongoose');
const { stringify } = require('uuid');

const workoutSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    mode:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('WorkoutMongo', workoutSchema);