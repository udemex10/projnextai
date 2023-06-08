// IMPORTANT: TEMPORARY SOLUTION, BETTER SOLUTION WOULD BE A TASK SCHEDULER LIKE Agenda.js
import { Task, Widget } from '@/models';
import connectToDatabase from '@/utils/dbConnect';

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { taskId, workspaceId } = req.body;

    // Find the task and the product backlog
    const task = await Task.findById(taskId);
    const productBacklog = await Widget.findOne({ workspace: workspaceId, isProductBacklog: true });

    // Move the task to the product backlog
    task.widget = productBacklog._id;

    await task.save();

    res.status(200).json(task);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
