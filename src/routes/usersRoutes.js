/*
Name: Woo Chyi Feng
Class: DISM/FT/2A/04
Adm num: 2322386
*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');
const controller = require('../controllers/usersController');

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.get('/:userId/trees', controller.readTreesByUserId);
router.get('/:id/trees/average-age', controller.calculateAverageAge);
router.put('/:userId/trees/:treeId/water', controller.checkTreeOwnership, controller.waterTreeById);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;