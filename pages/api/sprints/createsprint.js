// pages/api/sprint/create.js
import { Sprint, Workspace } from '@/models';
import connectToDatabase from '@/pages/api/dbConnect';

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, startDate, endDate, workspaceId } = req.body;

    // Find the workspace
    const workspace = await Workspace.findById(workspaceId);

    // Check if the user is an admin of the workspace
    const userRole = workspace.roles.find(role => role.user.toString() === req.body.userId);
    if (!userRole || userRole.role !== 'admin') {
      return res.status(403).json({ message: 'Only admins can create sprints.' });
    }

    const newSprint = new Sprint({
      name,
      startDate,
      endDate,
      workspace: workspaceId,
      tasks: [],
      // other fields...
    });

    await newSprint.save();

    res.status(201).json(newSprint);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
