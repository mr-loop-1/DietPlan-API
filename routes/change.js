const express = require("express");
const foodItemModel = require("../models/foodItemModel");
const mealModel = require("../models/mealModel");
const userModel = require("../models/userModel");

const router = express.Router();

router.patch("/meal", async (req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const foodItems = req.body.foodItems;

    const foodItemsWithId = [];

    for (const item of foodItems) {
        const foundItem = await foodItemModel.findOne({ name: item });
        if(foundItem) {
            foodItemsWithId.push(foundItem._id);
        }
        else {
            res.status(404).json({"msg": "Food Item not Found"});
        }
    }

    const meal = {
        name: name,
        category: category,
        foodItems: foodItemsWithId,
    };

    mealModel
        .findOneAndUpdate({ name: name }, meal)
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.patch("/user", async (req, res) => {
    const name = req.body.name;
    const calorieRequirement = req.body.calorieRequirement;
    const mealPlan = req.body.mealPlan;

    const mealPlanwithId = [];

    for (const item of mealPlan) {
        const foundMeal = await mealModel.findOne({ name: item.Meal });
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

    const user = {
        name: name,
        calorieRequirement: calorieRequirement,
        mealPlan: mealPlanwithId,
    };

    userModel
        .findOneAndUpdate({ name: name }, user)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
