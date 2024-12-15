const express = require('express');
const { createstudent , getstudent ,getOneStudent,updatestudent, deletestudent } = require('../controllers/studentController');
const router = express.Router();


router.post('/createstudent', createstudent);
router.get('/getstudent', getstudent);
router.get('/getOneStudent/:id', getOneStudent);
router.put('/updatestudent/:id', updatestudent);
router.delete('/deletestudent/:id', deletestudent);



module.exports = router;
