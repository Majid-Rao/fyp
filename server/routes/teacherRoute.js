const express = require('express');

// Import controller functions (assuming create is just one function, if not, adjust accordingly)
const { create , getAll ,getOne,update, deleteteacher } = require('../controllers/teacherController');



const router = express.Router();

// Create a new teacher
router.post('/create', create);
router.get('/getall', getAll);
router.get('/getone/:id', getOne);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteteacher);





// // Fetch all teachers (Uncomment when you want to use this route)
// router.get('/teachers', async (req, res) => {
//   // Add logic to fetch all teachers
//   try {
//     const teachers = await Teacher.find(); // Assuming Teacher is the model
//     res.json(teachers);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

module.exports = router;
