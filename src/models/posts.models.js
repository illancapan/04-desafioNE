import { pool } from "../../database/config.js";

export const getAllPostsModels = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    const result = await pool.query(SQLquery);
    return result.rows;
};

export const postAllPostsModel = async (titulo, img, descripcion, likes) => {
    const SQLquery =
        "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo, img, descripcion, likes];
    try {
        const result = await pool.query(SQLquery, values);
        return result.rows[0];
    } catch (error) {
        console.log("Error al crear el post: ", error);
        throw error;
    }
};

export const putAllPostsModel = async (id, titulo, img, descripcion, likes) => {
    try {
        const SQLquery =
            "UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *";
        const values = [titulo, img, descripcion, likes];
        const response = await pool.query(SQLquery, values);
        if (response.rowCount > 0) {
            return response.rows[0];
        }
    } catch (error) {
        console.log("Error al actualizar el post: ", error);
    }
};

export const deleteAllPostsModel = async (id) => {
    try {
        const SQLquery = "DELETE FROM posts WHERE id = $1 RETURNING *";
        const values = [id];
        const response = await pool.query(SQLquery, values);
        if (response.rowCount > 0) {
            return response.rows[0];
        }
    } catch (error) {
        console.log("Error al eliminar el post 🙃 : ", error);
    }
};

export const likePostModel = async (id) => {
    try {
        // llama a la funcion para actualizar el post con incrementLikes: true
        const response = await putAllPostsModel(id, {
            incrementLikes: true,
        });
        console.log("like realizado desde el model", response);
        return response; // devuelve la respuesta de la actualizacion
    } catch (error) {
        throw new Error(`Error al actualizar el post: ${error.message}`);
    }
};
