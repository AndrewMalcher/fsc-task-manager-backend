const express = require("express");
const dotenv = require("dotenv");
const TaskModel = require("./src/models/task.model");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(express.json());

connectToDatabase();

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await TaskModel.find({});
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({
            message: "Erro ao buscar tarefas",
            error: error.message,
        });
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);

        await newTask.save();

        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8000, () => console.log("listening on port 8000!"));
