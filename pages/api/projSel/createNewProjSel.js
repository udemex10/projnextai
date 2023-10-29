import connectToDatabase from "@/pages/api/dbConnect";
import {Board} from "@/models";

export const createBoard = async (req, res) => {
  await connectToDatabase();

  const newBoard = new Board(req.body);
  await newBoard.save();

  res.status(201).json(newBoard);
};
