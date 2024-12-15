const express = require('express');
const { createswapper , getswapper ,getOneSwapper,updateswapper, deleteswapper } = require('../controllers/swapperController');
const router = express.Router();


router.post('/createswapper', createswapper);
router.get('/getswapper', getswapper);
router.get('/getOneSwapper/:id', getOneSwapper);
router.put('/updateswapper/:id', updateswapper);
router.delete('/deleteswapper/:id', deleteswapper);



module.exports = router;
