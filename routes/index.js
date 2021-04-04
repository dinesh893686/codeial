const express=require("express");
const router = express.Router();
const home_controller=require('../controller/home_controller');

// home_controller.home('/',);
router.get('/',home_controller.home);
console.log("router added");
module.exports=router;