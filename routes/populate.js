const express = require('express');
const foodItemModel = require('../models/foodItemModel');
const mealModel = require('../models/mealModel');
const userModel = require('../models/userModel');

const router = express.Router();


router.post('/fooditem', (req, res) => {
    const name = req.body.name;
    const {calories: calories, protein: protein, carb: carb, fat: fat, acceptedUnits: acceptedUnits, itemWeight} = req.body;
    // console.log(name, calories, protein, carb, fat);

    const foodItem = new foodItemModel({
        name: name,
        calories: calories,
        protein: protein,
        carb: carb,
        fat: fat,
        acceptedUnits: acceptedUnits,
        itemWeight: itemWeight
    });

    foodItem.save().then(result => {
        res.status(201).json(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post('/meal', async (req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const foodItems = req.body.foodItems;

    const foodItemsWithId = [];

    for(const item of foodItems) {
        const foundItem = await foodItemModel.findOne({name: item});
        if(foundItem) {
            foodItemsWithId.push(foundItem._id);
        }
        else {
            res.status(404).json({"msg": "Food Item not Found"});
        }
    }

    // let foodItemsId = foodItems.map((item) => {

    const meal = new mealModel({
        name: name,
        category: category,
        foodItems: foodItemsWithId
    });
    
    meal.save().then(results => {
        res.status(201).json(results);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post('/user', async (req, res) => {
    const name = req.body.name;
    const calorieRequirement = req.body.calorieRequirement;
    const mealPlan = req.body.mealPlan;

    const mealPlanwithId = [];

    for(const item of mealPlan) {
        const foundMeal = await mealModel.findOne({name: item.Meal});
        if(foundMeal) {
            mealPlanwithId.push({
                date: item.date,
                Meal: foundMeal._id
            });
        }
        else {
            res.status(404).json({"msg": "Meal not Found"});
        }
    }

    const user = new userModel({
        name: name,
        calorieRequirement: calorieRequirement,
        mealPlan: mealPlanwithId
    });

    user.save().then(result => {
        res.status(201).json(result);
    })
    .catch((err) => {
        console.log(err);
    });
});


module.exports = router;