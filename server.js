import express from "express";
import cors from "cors";
import "dotenv/config";
import postsRouter from "./src/routes/posts.router.js";
// import Router from ",/src/routes...";

const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(express.json());
app.use(cors());

app.use("/", postsRouter);

app.listen(PORT, () => {
    console.log(`🔥Servidor en el puerto 🔥 http://localhost:${PORT}`);
});
