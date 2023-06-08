import connectToDatabase from "@/pages/api/dbConnect";
import { User, Organization } from "@/models";
import jwt from "jsonwebtoken";

// Middleware to authenticate the user
const authenticateToken = async (req, res, next) => {
  // ... existing code ...
};

export const createSubUser = async (req, res) => {
  await connectToDatabase();

  const { id } = req.user;
  const user = await User.findById(id);

  if (!user || user.role !== 'admin') {
    return res.status(401).json({ message: "Invalid user." });
  }

  // Check if user can create more sub-users based on licenses bought.
  if (user.subUsers.length >= user.licenses) {
    return res.status(400).json({ message: "You have reached the maximum number of sub-users allowed by your licenses." });
  }

  const newSubUser = new User(req.body);
  await newSubUser.save();

  // Associate the sub-user with the admin user and the organization.
  user.subUsers.push(newSubUser);
  await user.save();

  // Also add the sub-user to the organization's members.
  const organization = await Organization.findOne({ members: id });
  organization.members.push(newSubUser);
  await organization.save();

  res.status(201).json(newSubUser);
};
