import connectToDatabase from "@/pages/api/dbConnect";
import { User, Organization, Workspace } from "@/models";

export default async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { email, password, organizationName, workspaceName } = req.body;

    // Create a new user
    const newUser = new User({ email, password, role });
    await newUser.save();

    // If an organization name was provided, create a new organization
    if (organizationName) {
      const newOrganization = new Organization({ name: organizationName });
      await newOrganization.save();

      // Add the new organization to the user's organizations
      newUser.organizations.push(newOrganization);
      await newUser.save();
    }

    // If a workspace name was provided, create a new workspace
    if (workspaceName) {
      const newWorkspace = new Workspace({ name: workspaceName });
      await newWorkspace.save();

      // Add the new workspace to the user's workspaces
      newUser.workspaces.push(newWorkspace);
      await newUser.save();
    }

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } else {
    // Handle other request methods (GET, PUT, DELETE, etc.)
  }
};

