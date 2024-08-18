import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'; // Corrected the import path

const app = express();
dotenv.config();

app.use(express.json()); // To parse JSON request bodies

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

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
