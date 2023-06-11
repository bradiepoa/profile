const express = require('express')
const route = express.Router()

const services = require('../services/render');

/**
 * @description Root Route
 * @method Get/ 
 */

route.get('/',services.homeRoutes);

/**
 * @description add user
 * @method Get/ add-user
 */

route.get('/add-user',services.add_user);

/**
 * @description upadete user
 * @method Get/ update-user
 */

route.get('/update-user',services.update_user);

module.exports=route