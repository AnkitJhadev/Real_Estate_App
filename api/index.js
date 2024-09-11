import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'; // Corrected the import path
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

app.use(express.json()); // To parse JSON request bodies
app.use(cookieParser())

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/test', (req, res) => {
  res.json({
    mesg: 'Hello World',
  });
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); // Corrected the route

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500 ;
  const message = err.message || "Internal Server Error" ;
  return res.status(statusCode).json({
    sucess : 'false',
    statusCode,
    message
  })

})

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
