/*
Name: Woo Chyi Feng
Class: DISM/FT/2A/04
Adm num: 2322386
*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require('../services/db');

// ##############################################################
// DEFINE SELECT TREES BY USER ID
// ##############################################################
module.exports.selectById = (data, callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM tree
        WHERE user_id = ?;
        `;
    const VALUES = [data.user_id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

// ##############################################################
// DEFINE WATER TREE BY USER ID
// ##############################################################
module.exports.updateWaterById = (data, callback) =>
    {
        const SQLSTATMENT = `
        UPDATE Tree 
        SET watered_on = CURRENT_TIMESTAMP
        WHERE id = ?;
        `;
    const VALUES = [data.id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

// ##############################################################
// DEFINE MODEL FOR GET AVERAGE AGE OF TREES OWNED BY USER
// ##############################################################
module.exports.selectTreeById = (data, callback) =>
    {
        const SQLSTATMENT = `
        SELECT age FROM tree
        WHERE user_id = ?;
        `;
    const VALUES = [data.user_id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }
// ##############################################################
// DEFINE MODEL FOR CHECK TREE OWNERSHIP
// ##############################################################
module.exports.selectOwnerById = (data, callback) =>
    {
        const SQLSTATMENT = `
        SELECT user_id FROM tree
        WHERE id = ?;
        `;
    const VALUES = [data.id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }