import connectToDatabase from "@/pages/api/dbConnect";
import {Widget} from "@/models";

export const createWidget = async (req, res) => {
  await connectToDatabase();

  const newWidget = new Widget(req.body);
  await newWidget.save();

  res.status(201).json(newWidget);
};
