import pg from "pg";
import "dotenv/config";
const { Pool } = pg;

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const config = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    allowExitOnIdle: true,
};

export const pool = new Pool(config);

try {
    await pool.query("SELECT NOW()");
    console.log("Conectado a la base de datos desde config🔥🔥");
} catch (error) {
    console.log(
        "Error en la conexion a la base de datos desde config ❌",
        error.message
    );
}
