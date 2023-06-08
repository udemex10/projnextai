// pages/api/task/create.js
import { Task, Workspace } from '@/models';
import connectToDatabase from '@/pages/api/dbConnect';

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, description, workspaceId } = req.body;

    // Find the workspace
    const workspace = await Workspace.findById(workspaceId);

    const newTask = new Task({
      name,
      description,
      workspace: workspaceId,
      // other fields...
    });

    await newTask.save();

    res.status(201).json(newTask);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

