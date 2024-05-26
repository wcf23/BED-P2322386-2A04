/*
Name: Woo Chyi Feng
Class: DISM/FT/2A/04
Adm num: 2322386
*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const model = require("../models/usersModel");

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ TREE BY USERID
// ##############################################################
module.exports.readTreesByUserId = (req, res, next) =>
    {
        const data = {
            user_id: req.params.userId
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readTreesById:", error);
                res.status(500).json({message: "Internal server error."});
            } else {
                if(results.length == 0) 
                {
                    res.status(404).json({
                        message: "No trees found."
                    });
                }
                else res.status(200).json(results);
            }
        }
    
        model.selectById(data, callback);
    }

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR WATER TREE BY USERID
// ##############################################################
module.exports.waterTreeById = (req, res, next) =>
    {
        const data = {
            id: req.params.treeId,
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error waterTreeById:", error);
                res.status(500).json({message: "Internal server error."});
            }else res.status(204).send();
            }
    
        model.updateWaterById(data, callback);
    }

// ##############################################################
// DEFINE MIDDLEWARE FUNCTION FOR CHECK TREE OWNERSHIP
// ##############################################################
module.exports.checkTreeOwnership = (req, res, next) =>
    {
        const data = {
            id: req.params.treeId,
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error checkTreeOwnership:", error);
                res.status(500).json({message: "Internal server error."});
            } else {
                if(results.length == 0) 
                {
                    res.status(404).json({
                        message: "Tree not found."
                    });
                } else if (results[0].user_id != req.params.userId) {
                    res.status(403).json({message: "Tree does not belong to user."})
                }
                else next();
            }
        }
    
        model.selectOwnerById(data, callback);
    }

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR GET AVERAGE AGE OF 
// TREES OWNED BY USER
// ##############################################################
module.exports.calculateAverageAge = (req, res, next) =>
    {
        const data = {
            user_id: req.params.id,
        }
        console.log(req.params.id);
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error calculateAverageAge", error);
                res.status(500).json({message: "Internal server error."});
            } else {
                if(results.length == 0) 
                {
                    res.status(404).json({
                        message: "No trees found."
                    });
                } else {
                    let totalAge = 0;
                    for (let i = 0; i < results.length; i++) {
                        totalAge += results[0].age
                    }
                    let averageAge = totalAge / results.length
                    res.status(200).json({
                        averageAge: averageAge.toFixed(4),
                        numberOfTrees: results.length
                    });
                }
            }
        }
    
        model.selectTreeById(data, callback);
    }