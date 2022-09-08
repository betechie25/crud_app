const express= require('express');
//const app = express(); (This will create new app)
const route = express.Router(); 
const services= require('../services/render.js');

/* 
@description : Root Route
@method : get
*/
route.get('/',services.homeRoutes);

/* 
@description : Add User
@method : get
*/
route.get('/add-user',services.add_user);

/* 
@description : Update User
@method : get
*/
route.get('/update-user',services.update_user);



module.exports = route;