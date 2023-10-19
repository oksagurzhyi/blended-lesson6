const Task = require("../models/Task");

const getAllTasks = async (req, res, next) => {
  const tasks = await Task.findAll();
  res.status(200).json(tasks);
};

const getTaskById = async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  res.status(200).json(task);
};

const createTask = async (req, res, next) => {
  const { body } = req;
  console.log(body);
  const task = await Task.create(body);
  res.status(201).json(task);
};

const updateTask = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;
  const [updatedCount, updatedTask] = await Task.update(body, {
    where: { id },
    returning: true,
  });
  if (updatedCount === 0) {
    res.status(404).json({ msg: "Not found" });
    return;
  }
  res.status(200).json(updatedTask);
};
const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  const deletedCount = await Task.destroy({ where: { id } });
  if (deletedCount === 0) {
    res.status(404).json({ msg: "Not found" });
  }
  res.status(204).json({ msg: "Deleted success" });
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateTask,
  createTask,
  deleteTask,
};
