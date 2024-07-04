import express from "express";
import {
    getAll,
    createAll,
    updateAll,
    deleteAll,
    notFound,
    home,
    likePost,
} from "../controllers/posts.controllers.js";

const router = express.Router();

router.get("/", home);
router.get("/posts", getAll);
router.post("/posts", createAll);
router.put("/posts/:id", updateAll);
router.delete("/posts/:id", deleteAll);
router.put("/posts/like/:id", likePost);

router.get("*", notFound);

export default router;
