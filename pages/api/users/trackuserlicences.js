import connectToDatabase from "@/pages/api/dbConnect";
import { User } from "@/models";
export const purchaseLicenses = async (req, res) => {
  await connectToDatabase();

  const { id } = req.user;
  const user = await User.findById(id);

  if (!user || user.role !== 'admin') {
    return res.status(401).json({ message: "Invalid user." });
  }

  const { newLicenses } = req.body; // Assuming the number of new licenses to purchase is sent in the request body

  if (typeof newLicenses !== 'number' || newLicenses <= 0) {
    return res.status(400).json({ message: "Invalid number of licenses." });
  }

  // Add the new licenses to the user's existing licenses
  user.licenses += newLicenses;
  await user.save();

  res.status(200).json({ message: `Successfully purchased ${newLicenses} new licenses. Total licenses: ${user.licenses}` });
};
