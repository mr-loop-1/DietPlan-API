const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealSchema = new Schema({
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Evening Snack', 'Dinner'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    foodItems: [
        {
            type: Schema.Types.ObjectId,
            ref: 'FoodItem',
            required: true
        }
    ]
});

module.exports = mongoose.model('Meal', mealSchema);