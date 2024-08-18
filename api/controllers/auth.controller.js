import User from '../models/user.model.js'; // Corrected import path

export const Signup = async (req, res) => {
  const { username, email, password } = req.body; // Corrected spelling of "password"

  try {
    const newUser = new User({
      username,
      email,
      password, // Corrected spelling of "password"
    });

    await newUser.save();

    res.status(201).json({
      msg: 'User created successfully',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating user',
      error: error.message,
    });
  }
};
