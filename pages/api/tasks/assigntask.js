import { Task, User } from '@/models';
import connectToDatabase from '@/pages/api/dbConnect';

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { taskId, userId } = req.body;

    // Find the task and user
    const task = await Task.findById(taskId);
    const user = await User.findById(userId);

    // Assign the task to the user
    task.assignee = user;

    await task.save();

    res.status(200).json(task);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};