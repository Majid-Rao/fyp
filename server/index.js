const express = require('express');
// const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const router = require('./routes/teacherRoute');
const swaproute = require('./routes/swapperRoute');
const studentroute = require('./routes/studentRoute');



const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
// connectDB();

// app.get('/ping', (req, res) => {
//     res.send('pinged');
// });
// const PORT = process.env.PORT;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Middleware
app.use(cors());
app.use(express.json());

//Global error handler
app.use((err,req,res,next) => {
err.statusCode = err.statusCode || 500;
err.status = err.status || 'error';
res.status(err.statusCode).json({
    status:err.status,
    message:err.message,
});
});


//routes
app.use('/api/auth',authRouter);
//teacherroute
app.use('/api',router);
app.use('/api',swaproute);
app.use('/api',studentroute);




// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));