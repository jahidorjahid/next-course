import { fetchWrapper } from '../helpers';
import mongoose from 'mongoose';
import Todo from '../models/todo';

const baseUrl = `http://localhost:3000/api/test`;

export async function getAll(req, res) {
  try {
    const result = await Todo.find();
    res.json({ msg: 'iam from try block', result });
  } catch (err) {
    // throw err;
    res.status(500).json({ message: err.message });
  }
}

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
  return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}
