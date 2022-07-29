const express = require('express');
const foodItemModel = require('../models/foodItemModel');
const mealModel = require('../models/mealModel');
const userModel = require('../models/userModel');

const router = express.Router();


router.post('/mealPlan', async (req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const foodItems = req.body.foodItems;

    const foodItemsWithId = [];

    for(const item of foodItems) {
        const foundItem = await foodItemModel.findOne({name: item});
        foodItemsWithId.push(foundItem._id);
    }

    const meal = {
        name: name,
        category: category,
        foodItems: foodItemsWithId
    };
    
    mealModel.findOneAndUpdate({name: name}, meal).then(results => {
        res.status(201).json(results);
    })
});

router.post('/user', async (req, res) => {
    const name = req.body.name;
    const calorieRequirement = req.body.calorieRequirement;
    const mealPlan = req.body.mealPlan;

    const mealPlanwithId = [];

    for(const item of mealPlan) {
        const foundMeal = await mealModel.findOne({name: item.Meal});
        mealPlanwithId.push({
            date: item.date,
            Meal: foundMeal._id
        });
    }

    const user = {
        name: name,
        calorieRequirement: calorieRequirement,
        mealPlan: mealPlanwithId
    };

    userModel.findOneAndUpdate({name: name}, user).then(result => {
        res.status(201).json(result);
    })
});


module.exports = router;