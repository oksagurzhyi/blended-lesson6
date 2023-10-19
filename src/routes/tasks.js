const { Router } = require("express");
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require("../controllers/tasks.controllers");

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
