/*
Name: Woo Chyi Feng
Class: DISM/FT/2A/04
Adm num: 2322386
*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');
const controller = require('../controllers/treesController');


// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.get('/:id', controller.readTreeById);
router.post('/:id', controller.createTree);
router.put('/:id', controller.updateTreeById);
router.delete('/:id', controller.deleteTreeById);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;