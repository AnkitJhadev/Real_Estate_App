import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

export const authsignup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcryptjs.hashSync(password,10);


  try {
    const newUser = new User({
      username,
      email,
      password : hashedPassword 
    });


    await newUser.save();
    res.status(201).json({
      msg: "User created successfully"
    });
  } catch (err) {
         next(err);
  }
};
