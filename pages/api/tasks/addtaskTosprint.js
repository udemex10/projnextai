import { Task, Sprint } from '@/models';
import connectToDatabase from '@/pages/api/dbConnect';

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { taskId, sprintId } = req.body;

    // Find the task and sprint
    const task = await Task.findById(taskId);
    const sprint = await Sprint.findById(sprintId);

    // Add the task to the sprint
    sprint.tasks.push(task);

    await sprint.save();

    res.status(200).json(sprint);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};