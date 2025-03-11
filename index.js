const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();

// Middleware para analisar o corpo das requisições em JSON
app.use(express.json());

connectToDatabase().catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1);
});

app.get("/", (req, res) => {
    const tasks = [
        {
            description: "Terminar o gerenciador de tarefas!",
            isCompleted: false, // Corrigir valor booleano
        },
    ];
    res.status(200).send(tasks);
});

app.listen(8000, () => console.log("listening on port 8000!"));
