import { pool } from "../../database/config.js";

// MODELO DE GET
export const getAllPostsModel = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    const result = await pool.query(SQLquery);
    return result.rows;
};

// MODELO DE POSTS
export const postAllPostsModel = async (titulo, img, descripcion, likes) => {
    const sql =
        "INSERT INTO posts (titulo, img,descripcion,likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo, img, descripcion, likes];
    try {
        const result = await pool.query(sql, values);
        return result.rows[0]; // retorna el nuevo post creado
    } catch (error) {
        console.error("Error al crear el post:", error);
        throw error;
    }
};

// METODO PUT
export const putAllPostsModel = async (
    id,
    { titulo, img, descripcion, likes }
) => {
    try {
        const result = await pool.query(
            "UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *",
            [titulo, img, descripcion, likes, id]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error("Error al actualizar el post: " + error.message);
    }
};

//METODO DELETE
export const deleteAllPostsModel = async (id) => {
    try {
        const result = await pool.query(
            "DELETE FROM posts WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0];
    } catch {
        console.error("Error al eliminar el post: ", error);
        throw error;
    }
};
//ACTUALIZO EL POST
export const likePostModel = async (id) => {
    try {
        const result = await pool.query(
            "UPDATE posts SET likes = COALESCE(likes, 0) + 1 WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error(
            "Error al actualizar los post desde models: " + error.message
        );
    }
};
