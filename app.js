const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

const queryRoute = require('./routes/query');
const populateRoute = require('./routes/populate');
const changeRoute = require('./routes/change');


app.use("/change", changeRoute);
app.use("/add", populateRoute);
app.use("/query", queryRoute);

app.use((req, res) => {
    res.status(404).json({"message": "Not a viable endpoint"});
})

mongoose
    .connect(
        "mongodb+srv://commonuser:forCommon@abdatlashackathon.m47fd.mongodb.net/evolvFit?retryWrites=true&w=majority"
    )
    .then((result) => {
        app.listen(4001);
    })
    .catch(err => {
        console.log(err);
    });
