# DietPlan-API
The data that has been stored via POST on the MongoDb Atlas Cluster is in the [./data](https://github.com/mr-loop-1/DietPlan-API/tree/main/data) directory

It includes 20 fooditems, 5 meal, 1 user
## Running
```npm install```
```npm start```
The endpoints will be available through PORT 4001

## Important
The names are case-sensitve for now.

## Available EndPoints
### POST
1. /add/fooditem
2. /add/meal
3. /add/user

### PATCH
1. /change/meal
2. /change/uer

### GET
UNDER CONSTRUCTION
1. /query/:queriedCalorie
