import connectToDatabase from "@/pages/api/dbConnect";
import {List} from "@/models";

export const createList = async (req, res) => {
  await connectToDatabase();

  const newList = new List(req.body);
  await newList.save();

  res.status(201).json(newList);
};
