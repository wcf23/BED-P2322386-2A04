/*
Name: Woo Chyi Feng
Class: DISM/FT/2A/04
Adm num: 2322386
*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');
const treesRoutes = require('./treesRoutes')
const usersRoutes = require('./usersRoutes')

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.use("/trees", treesRoutes);
router.use("/users", usersRoutes);
module.exports = router;

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;