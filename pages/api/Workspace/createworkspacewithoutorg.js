// pages/api/workspace/createWithoutOrg.js
import { Workspace } from '@/models';
import connectToDatabase from '@/pages/api/dbConnect';
// You would need to import a function to send emails
// import sendEmail from '@/utils/sendEmail';

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, description, inviteEmail } = req.body;

    const newWorkspace = new Workspace({
      name,
      description,
      // other fields...
    });

    await newWorkspace.save();

    // If an invite email was provided, send an invitation
    if (inviteEmail) {
      // You would need to implement the sendEmail function
      // sendEmail(inviteEmail, 'You have been invited to join a workspace!', '...');
    }

    res.status(201).json(newWorkspace);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
