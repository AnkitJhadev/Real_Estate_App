import User from '../models/user.model.js'; // Corrected import path
import bcryptjs from 'bcryptjs';

export const Signup = async (req, res,next) => {
  const { username, email, password } = req.body; // Corrected spelling of "password"

  const hashedPassword = bcryptjs.hashSync(password,10);

  try {
    const newUser = new User({
      username,
      email,
      password : hashedPassword, // Corrected spelling of "password"
    });

    await newUser.save();

    res.status(201).json({
      msg: 'User created successfully',
    });
  } catch (error) {
       next(error);
  }
};
