// pages/api/workspace/create.js
import { Workspace, Organization, Widget } from '@/models';
import connectToDatabase from '@/pages/api/dbConnect';

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, description, organizationId } = req.body;

    const newWorkspace = new Workspace({
      name,
      description,
      // other fields...
    });

    await newWorkspace.save();

     const productBacklog = new Widget({
      name: 'Product Backlog',
      templateType: 'backlog',
      workspace: newWorkspace._id,
      isProductBacklog: true,
    });

    // If an organization ID was provided, add the workspace to the organization
    if (organizationId) {
      const organization = await Organization.findById(organizationId);
      organization.workspaces.push(newWorkspace);
      await organization.save();
    }
    res.status(201).json(newWorkspace);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
