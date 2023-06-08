const connectToDatabase = require('./dbConnect');

export default async (req, res) => {
  const client = await connectToDatabase();
  const db = client.db('your-database-name');

  const data = await db.collection('your-collection-name').find().toArray();

  res.status(200).json({ data });
};
