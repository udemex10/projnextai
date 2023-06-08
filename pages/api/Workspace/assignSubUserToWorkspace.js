import connectToDatabase from "@/pages/api/dbConnect";
import { User, Workspace } from "@/models";
import jwt from "jsonwebtoken";

export const assignSubUserToWorkspace = async (req, res) => {
  await connectToDatabase();

  const { id } = req.user;
  const user = await User.findById(id);

  if (!user || user.role !== 'admin') {
    return res.status(401).json({ message: "Invalid user." });
  }

  // Extract subUserId and workspaceId from the request body.
  const { subUserId, workspaceId } = req.body;

  const subUser = await User.findById(subUserId);
  const workspace = await Workspace.findById(workspaceId);

  if (!subUser || !workspace) {
    return res.status(404).json({ message: "Invalid sub-user or workspace." });
  }

  // Assign the sub-user to the workspace.
  subUser.workspaces.push(workspace);
  await subUser.save();

  res.status(201).json(subUser);
};