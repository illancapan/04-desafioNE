import {
    getAllPostsModels,
    postAllPostsModel,
    putAllPostsModel,
    deleteAllPostsModel,
    likePostModel,
} from "../models/posts.models.js";

export const notFound = (req, res) => {
    res.status(404).send("Not Found");
};

export const home = (req, res) => {
    res.send("Hola desde el home controller");
};

export const getAll = async (req, res) => {
    try {
        const response = await getAllPostsModels();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
export const createAll = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body;
        const response = await postAllPostsModel(
            titulo,
            img,
            descripcion,
            likes
        );
        res.status(201).send(response);
    } catch (error) {
        console.error("Error al crear el post:", error);
        res.status(500).send("Error interno al crear el post"); // Enviar respuesta de error interno del servidor
    }
};

export const updateAll = async (req, res) => {
    try {
        const { id } = req.params;
        const { post } = req.body;
        const posts = await putAllPostsModel(id, posts);
        res.status(200).send(
            { posts: post },
            "Post actualizado correctamente 🫡🫡"
        );
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteAll = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await deleteAllPostsModel(id);
        res.status(200).send("Post borrado correctamente 🗑");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        await likePostModel(id);
        res.status(200).send("Post actualizado correctamente 🫡🫡", response);
    } catch (error) {
        res.status(500).send(`Error al actualizar el post: ${error.message}`);
    }
};
