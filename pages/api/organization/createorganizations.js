import connectToDatabase from "@/pages/api/dbConnect";
import { User, Organization } from "@/models";
import jwt from "jsonwebtoken";

// Middleware to authenticate the user
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);  // If there isn't any token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);  // If the token is invalid
    req.user = user;
    next();
  });
};

export const createOrganization = async (req, res) => {
  await connectToDatabase();

  const { id } = req.user;  // Extract user ID from the token payload
  const user = await User.findById(id);

  if (!user) {
    return res.status(401).json({ message: "Invalid user." });
  }

  const newOrganization = new Organization({ ...req.body, createdBy: id });
  await newOrganization.save();

  // Updating the user's organizations field
  user.organizations.push(newOrganization);
  await user.save();

  res.status(201).json(newOrganization);
};
