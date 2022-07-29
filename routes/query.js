const express = require('express');
const foodItemModel = require('../models/foodItemModel');
const mealModel = require('../models/mealModel');
const userModel = require('../models/userModel');

const router = express.Router();


router.get('/:queriedCalorie', async (req, res) => {
    // res.json({"msg":"helloooooo"});

    const queriedCalorie = req.params.queriedCalorie;

    const flag = true;

    let baseArray = await foodItemModel.find();

    baseArray = baseArray.map(item => ({calories: item.calories, protein: item.protein}));
    // console.log(allFoodItems);

    const conditionOne = [];

    // for(const item of baseArray) {
        
    // }

    for(let i=0; i!== 175000; i++) {

    }

    res.json({"msg":"helloooooo"});




});


module.exports = router;