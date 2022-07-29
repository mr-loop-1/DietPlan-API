const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carb: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    acceptedUnits: [
        {
            type: String,
            enum: ["ml", "litre", "kg", "g", "item"],
            required: true
        }
    ],
    itemWeight: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('FoodItem', foodItemSchema);