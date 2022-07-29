const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    calorieRequirement: {
        type: Number,
        required: true
    },
    mealPlan: [{
        date: {
            type: Date,
            required: true
        },
        Meal: {
            type: Schema.Types.ObjectId,
            ref: 'Meal', 
            required: true
        }
    }]
});

module.exports = mongoose.model('User', userSchema);