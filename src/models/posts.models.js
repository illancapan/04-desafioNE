import pool from "../../database/config.js";

export const getAllPostModels = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    const result = await pool.query(SQLquery);
    return result.rows;
};
export const getPostModelById = async () => {};
export const createPostModel = async () => {};
export const updatePostModel = async () => {};
export const deletePostModel = async () => {};
