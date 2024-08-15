import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });



// Using Routers
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500 
   const message = err.message || 'Internal Server Error'

  // Send an appropriate response to the client
  res.status(statusCode).json({
    sucess :  false,
    statusCode ,
    message
  });

  // Optionally, you can call next(err) to pass the error to the next handler
});


app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
