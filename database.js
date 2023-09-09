import { createPool } from "mysql2/promise";

export const conexion = createPool({
    host: 'localhost',
    port: 3306,
    user: 'tony',
    password: 't0n1h4ll4n1472',
    database: 'tareas'
});

