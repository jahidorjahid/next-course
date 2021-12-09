import mongoose from 'mongoose';
import dbConnect from '../../config/dbConnect';
import todoSchema from '../../models/todo';
import { getAll } from '../../services/testService';

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      getAll(req, res);
      break;
    case 'POST':
      try {
        const newTodo = new todoSchema({
          title: req.body.title,
        });
        newTodo.save();
        res.json({ message: 'todo was saved' });
      } catch (error) {
        res.json({ message: 'todo was not saved' });
      }
      break;
  }
}
