const express=require('express');
const studentController=require("../controllers/student")

const router=express.Router()

router.post('/student',studentController.studentEnroll)

module.exports=router