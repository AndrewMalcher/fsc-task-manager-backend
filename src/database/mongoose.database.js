const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanagercluster.re9mh.mongodb.net/?retryWrites=true&w=majority&appName=FscTaskManagerCluster`
        );
        console.log("Conectado com mongodb com sucesso!");
    } catch (error) {
        console.log("Erro ao conectar ao mongodb:", error);
    }
};

module.exports = connectToDatabase;
