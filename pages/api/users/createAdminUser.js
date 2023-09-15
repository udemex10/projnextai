// pages/api/admin/create.js
import connectToDatabase from "@/pages/api/dbConnect";
import { User, Organization, Workspace } from "@/models";

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { email, password, organizationName, workspaceName } = req.body;

    // Create a new admin user
    const newAdmin = new User({ email, password, role: 'admin' });
    await newAdmin.save();

    // If an organization name was provided, create a new organization
    if (organizationName) {
      const newOrganization = new Organization({ name: organizationName });
      await newOrganization.save();

      // Add the new organization to the admin's organizations
      newAdmin.organizations.push(newOrganization);
      await newAdmin.save();
    }

    // If a workspace name was provided, create a new workspace
    if (workspaceName) {
      const newWorkspace = new Workspace({ name: workspaceName });
      await newWorkspace.save();

      // Add the new workspace to the admin's workspaces
      newAdmin.workspaces.push(newWorkspace);
      await newAdmin.save();
    }

    res.status(201).json({ message: 'Admin created successfully', user: newAdmin });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
