// pages/api/user/create.js
import connectToDatabase from "@/pages/api/dbConnect";
import { User } from "@/models";

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Create a new normal user
    const newUser = new User({ email, password, role: 'user' });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
