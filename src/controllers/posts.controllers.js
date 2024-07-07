import {
    getAllPostsModel,
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

// METODO GET
export const getAll = async (req, res) => {
    try {
        const posts = await getAllPostsModel();
        res.status(200).json(posts);
        // res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los posts" });
    }
};

// METODO POST
export const createAll = async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
        const nuevoPost = await postAllPostsModel(
            titulo,
            img,
            descripcion,
            likes
        );
        res.status(200).json({ post: nuevoPost });
    } catch (error) {
        res.status(500).send(error.message);
        console.log("Error al crear el post:", error.message);
    }
};
// METODO PUT actualizar
export const updateAll = async (req, res) => {
    const { id } = req.params;
    const { titulo, img, descripcion, likes } = req.body;
    try {
        const postsActualizado = await putAllPostsModel(id, {
            titulo,
            img,
            descripcion,
            likes,
        });
        res.status(200).json(postsActualizado);
    } catch (error) {
        res.status(500).send(error.message);
        console.log("Error al actualizar el post:", error.message);
    }
};
// METODO DELETE
export const deleteAll = async (req, res) => {
    try {
        const { id } = req.params;
        const deletPost = await deleteAllPostsModel(id);
        if (!deletPost) {
            res.status(404).json({ error: "Post no encontrado" });
        }
        res.status(200).json({ message: "Post borrado correctamente 🗑" });
    } catch (error) {
        console.log("Error al borrar el post", error.message);
        res.status(500).json({ error: "Error al borrar el post" });
    }
};
// ACTUALIZO
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const postActualizado = await likePostModel(id);
        // res.status(200).send("Post actualizado correctamente 🫡🫡", response);
        if (!postActualizado) {
            res.status(404).json({ error: "Post no encontrado" });
        }
        res.status(200).json(postActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(
            "Error al actualizar los likes del post desde controllers: ",
            error.message
        );
    }
};
