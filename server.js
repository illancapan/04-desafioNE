import express from "express";
import cors from "cors";
// import Router from ",/src/routes...";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/posts");

app.listen(PORT, () => {
    console.log(`🔥Servidor en el puerto 🔥 http://localhost:${PORT}`);
});
