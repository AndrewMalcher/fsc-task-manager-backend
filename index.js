const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();

connectToDatabase();

app.get("/tasks", (req, res) => {
    const tasks = [
        {
            description: "Terminar o gerenciador de tarefas!",
            isCompleted: false, // Corrigir valor booleano
        },
    ];
    res.status(200).send(tasks);
});

app.listen(8000, () => console.log("listening on port 8000!"));
